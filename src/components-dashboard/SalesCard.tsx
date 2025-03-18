import {Card} from "@/components/ui/card"

export default function SalesCard() {
  const salesData = [
    {
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      saleAmount: "+$1,999.00",
    },
    {
      name: "Jackson Lee",
      email: "isabella.nguyen@email.com",
      saleAmount: "+$1,999.00",
    },
    {
      name: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      saleAmount: "+$39.00",
    },
    {
      name: "William Kim",
      email: "will@email.com",
      saleAmount: "+$299.00",
    },
    {
      name: "Sofia Davis",
      email: "sofia.davis@email.com",
      saleAmount: "+$39.00",
    },
  ];

  return (
    <Card className="max-w-2xl"> 
    <div className="flex flex-col gap-0.5 p-4 ">
      <h2 className="text-xs">Recent Sales</h2>
      <p className="text-sm text-gray-600">You made 265 sales this month.</p>

      {salesData.map((sale, index) => (
        <div key={index} className="flex flex-wrap justify-between gap-3">
          <section className="flex justify-between gap-3">
            <div className="h-12 w-12 rounded-full bg-gray-100 p-1">
              <img
                width={200}
                height={200}
                src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${sale.name}`}
                alt="avatar"
              />
            </div>
            <div className="text-sm">
              <p>{sale.name}</p>
              <p>{sale.email}</p>
            </div>
          </section>
          <p>{sale.saleAmount}</p>
        </div>
      ))}
    </div>
    </Card>
  );
}
