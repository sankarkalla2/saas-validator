// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { NewPlan } from "@/schemas/payment";
// import { Button } from "@/components/ui/button";
// import { useToast } from "@/hooks/use-toast";
// import { getCheckoutURL } from "@/actions/payments";

// declare global {
//   interface Window {
//     createLemonSqueezy: () => void;
//   }
// }

// export function SignupButton(props: {
//   plan: NewPlan;
//   currentPlan?: NewPlan;
//   embed?: boolean;
// }) {
//   const { plan, currentPlan, embed = true } = props;
//   const { toast } = useToast();
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const isCurrent = plan.id === currentPlan?.id;

//   const label = isCurrent ? "Your plan" : "Sign up";

//   // Make sure Lemon.js is loaded, you need to enqueue the Lemon Squeezy SDK in your app first.
//   useEffect(() => {
//     if (typeof window.createLemonSqueezy === "function") {
//       window.createLemonSqueezy();
//     }
//   }, []);

//   return (
//     <Button
//       disabled={loading || isCurrent}
//       onClick={async() => {
//         // Create a checkout and open the Lemon.js modal
//         let checkoutUrl: string | undefined = "";

//         try {
//           setLoading(true);
//           checkoutUrl = await getCheckoutURL(plan.variantId, embed);
//         } catch (error) {
//           setLoading(false);
//           toast({
//             description: "Something went wrong",
//           });
//         } finally {
//           embed && setLoading(false);
//         }

//         embed
//           ? checkoutUrl && window.LemonSqueezy.Url.Open(checkoutUrl)
//           : router.push(checkoutUrl ?? "/");
//       }}
//     >
//       {label}
//     </Button>
//   );
// }
