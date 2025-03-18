import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function CardWithForm() {
  return (
    <div className="flex flex-wrap space-x-4 gap-4">
      {/* Total Revenue Card */}
      <Card className="w-[350px] mb-4">
        <CardHeader>
          <CardTitle className="font-normal">Total Revenue</CardTitle>
          <CardDescription className="font-extrabold text-2xl text-black ">$45,231.89</CardDescription>
          <p className="text-xs text-gray-400">+20.1% from last month</p>
        </CardHeader>
      </Card>

      {/* Subscriptions Card */}
      <Card className="w-[350px] mb-4">
        <CardHeader>
          <CardTitle className="font-normal">Subscriptions</CardTitle>
          <CardDescription className="font-extrabold text-2xl text-black">+2350</CardDescription>
          <p className="text-xs text-gray-400">+180.1% from last month</p>
        </CardHeader>
      </Card>

      {/* Sales Card */}
      <Card className="w-[350px] mb-4">
        <CardHeader>
          <CardTitle className="font-normal">Sales</CardTitle>
          <CardDescription className="font-extrabold text-2xl text-black">+12,234</CardDescription>
          <p className="text-xs text-gray-400">+19% from last month</p>
        </CardHeader>
      </Card>

      {/* Active Now Card */}
      <Card className="w-[350px] mb-4">
        <CardHeader>
          <CardTitle className="font-normal">Active Now</CardTitle>
          <CardDescription className="font-extrabold text-2xl text-black">+573</CardDescription>
          <p className="text-xs text-gray-400">+201 since last hour</p>
        </CardHeader>
      </Card>
    </div>
  )
}
