import { useState } from "react";
import { Component } from "./components-dashboard/Barchart";
import { CardWithForm } from "./components-dashboard/Card";
import SalesCard from "./components-dashboard/SalesCard";
import { AppSidebar } from "./components-dashboard/app-sidebar";
import { Tabbe } from "./components-dashboard/Tabs";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import  Alert  from '../src/components/alert';
import { Button } from "./components/ui/button";
import { FiCheck, FiStar } from "react-icons/fi";
import  Badge  from '../src/components-dashboard/Badge'

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <SidebarProvider>
      <>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 items-center gap-4 border-b bg-background px-6">
            <SidebarTrigger />

            <p className="font-semibold pt-3">Dashboard</p>
            <Badge color="success" icon={<FiCheck />}>Success</Badge>
            <Badge color="warning" icon={<FiStar />}>
              Featured
            </Badge>
          </header>
          {alertVisible && (
          <Alert onClose={() => setAlertVisibility(false)}>Tisdag - Workshop - Komponent-bibliotek
          Jobbat mig igenom en serie med återanvända komponenter, allt är i den andra komponent mappen, kan jag få godkänt med dem </Alert>
        )}
        <Button onClick={() => setAlertVisibility(true)}>Viktigt medelande!</Button>
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
      </>
    </SidebarProvider>
  );
}

export default App;
