"use server";

import { auth } from "@/auth";
import { configureLemonSqueezy } from "@/config/lemonsqueezy";
import { prismaClient } from "@/db.";
import {
  createCheckout,
  getProduct,
  listPrices,
  listProducts,
  Variant,
} from "@lemonsqueezy/lemonsqueezy.js";
import { Plan } from "@prisma/client";

interface PlanProps {
  productId: number;
  productName: string | null;
  variantId: number;
  name: string;
  description: string | null;
  price: string;
  isUsageBased: boolean;
  interval: string | null;
  intervalCount: number | null;
  trialInterval: string | null;
  trialIntervalCount: number | null;
  sort: number | null;
}
export async function syncPlans() {
  configureLemonSqueezy();

  //fetch all the variants from database

  const productVariants: Plan[] = await prismaClient.plan.findMany();

  console.log(productVariants);
  async function addVariant(variant: PlanProps) {
    console.log(`Syncing variant ${variant.name} with database...`);

    await prismaClient.plan.create({
      data: {
        ...variant,
      },
    });
  }

  ///fetch the  products from lemonsqueezy LEMONSQUEEZY_store

  const products = await listProducts({
    filter: { storeId: process.env.LEMONSQUEEZY_STORE_ID },
    include: ["variants"],
  });

  //loop through  all the variants

  const allVariants = products.data?.included as Variant["data"][] | undefined;

  console.log("product", allVariants?.length);

  if (allVariants) {
    console.log("called");
    for (const v of allVariants) {
      const variant = v.attributes;

      if (variant.status === "draft") {
        continue;
      }

      console.log("not even once");
      const productName =
        (await getProduct(variant.product_id)).data?.data.attributes.name ?? "";

        console.log(productName)

      //fetch the price object
      const variantPriceOjbect = await listPrices({
        filter: {
          variantId: v.id,
        },
      });

      const currentPriceObj = variantPriceOjbect.data?.data.at(0);
      const isUsageBased =
        currentPriceObj?.attributes.usage_aggregation !== null;
      const interval = currentPriceObj?.attributes
        .renewal_interval_unit as string;
      const intervalCount =
        currentPriceObj?.attributes.renewal_interval_quantity!;
      const trialInterval = currentPriceObj?.attributes
        .trial_interval_unit as string;
      const trialIntervalCount = currentPriceObj?.attributes
        .trial_interval_quantity as number;

      const price = isUsageBased
        ? currentPriceObj?.attributes.unit_price_decimal
        : currentPriceObj.attributes.unit_price;

      const priceString = price !== null ? price?.toString() ?? "" : "";

      const isSubscription =
        currentPriceObj?.attributes.category === "subscription";

      // If not a subscription, skip it.
      // if (!isSubscription) {
      //   continue;
      // }

      await addVariant({
        name: variant.name,
        description: variant.description,
        price: priceString,
        interval,
        intervalCount,
        isUsageBased,
        productId: variant.product_id,
        productName,
        variantId: parseInt(v.id) as number,
        trialInterval,
        trialIntervalCount,
        sort: variant.sort,
      });
    }
  }
  return productVariants;
}


export async function getCheckoutURL(variantId: number, embed = false) {
  configureLemonSqueezy()

  const session = await auth()

  if (!session?.user) {
    throw new Error('User is not authenticated.')
  }

  // import { createCheckout } from '@lemonsqueezy/lemonsqueezy.js'
  const checkout = await createCheckout(
    process.env.LEMONSQUEEZY_STORE_ID!,
    variantId,
    {
      checkoutOptions: {
        embed,
        media: false,
        logo: !embed,
      },
      checkoutData: {
        email: session.user.email ?? undefined,
        custom: {
          user_id: session.user.id,
        },
      },
      productOptions: {
        enabledVariants: [variantId],
        redirectUrl: `${process.env.NEXT_PUBLIC_APP_URL}/billing/`,
        receiptButtonText: 'Go to Dashboard',
        receiptThankYouNote: 'Thank you for signing up to Lemon Stand!',
      },
    }
  )

  return checkout.data?.data.attributes.url
}
