import { syncPlans } from "@/actions/payments";
import { Plan } from "@/app/billing/plans/plan";
import { prismaClient } from "@/db.";
import { NewPlan } from "@/schemas/payment";

export async function Plans() {
  let allPlans: NewPlan[] = await prismaClient.plan.findMany({});

  console.log(allPlans);

  if (!allPlans.length) {
    allPlans = await syncPlans();
  }

  if (!allPlans.length) {
    return <p>No plans available.</p>;
  }

  return (
    <div>
      <h2>Plans</h2>

      <div>
        {allPlans.map((plan, index) => {
          return <Plan plan={plan} key={`plan-${index}`} />;
        })}
      </div>
    </div>
  );
}
