import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BuyButton() {
  return (
    <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
      <Link
        href={
          "https://test2223343.lemonsqueezy.com/buy/9bbd8ed3-0a4a-4dfe-97d1-f2a0c17b1397"
        }
      >
        Buy Now
      </Link>
    </Button>
  );
}
