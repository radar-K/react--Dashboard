import { Component } from "./components-dashboard/Barchart"
import { CardWithForm } from "./components-dashboard/Card"
import SalesCard from "./components-dashboard/SalesCard"
import { AppSidebar } from "./components-dashboard/app-sidebar"
import { Tabbe } from "./components-dashboard/Tabs"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "./components/ui/sidebar"

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 items-center gap-4 border-b bg-background px-6">
          <SidebarTrigger />
          <p className="font-semibold">Dashboard</p>
        </header>
        <main className="flex-1 p-6">
          <Tabbe />

          <CardWithForm />

          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <div className="w-full md:w-1/2">
              <Component />
            </div>
            <div className="w-full md:w-1/2">
              <SalesCard />
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default App

