import { checkSubscription } from "@/lib/subscription";
import { Info } from "../_component/info";
import { Separator } from "@/components/ui/separator";
import { SubscriptionButton } from "../_component/subscription-button";

const BillingPage = async () => {
  const isPro = await checkSubscription();
  return (
    <div className="w-full">
      <Info isPro={isPro} />
      <Separator className="my-2" />
      <SubscriptionButton isPro={isPro} />
    </div>
  );
};

export default BillingPage;
