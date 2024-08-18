import React from "react";
import Link from "next/link";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/ui/accordion";
import { Home, LineChart, Package, Package2, ShoppingCart, Users, Bell } from "lucide-react";
import { Button } from "../components/button";
import { Badge } from "../components/badge";

type SidebarProps = {
  isOpen: boolean;
};

export default function Sidebar({ isOpen }: SidebarProps) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out bg-muted/40  border-r`}
    >
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <span>Acme Inc</span>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1">
          <Accordion type="single" collapsible>
            <AccordionItem value="dashboard">
              <AccordionTrigger className="text-muted-foreground">
                <Home className="h-4 w-4" /> Dashboard
              </AccordionTrigger>
              <AccordionContent>
                <Link href="/analytics" className="block py-2 pl-6 text-muted-foreground">
                  Analytics
                </Link>
                <Link href="/reports" className="block py-2 pl-6 text-muted-foreground">
                  Reports
                </Link>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="orders">
              <AccordionTrigger className="text-muted-foreground">
                <ShoppingCart className="h-4 w-4" /> Orders
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  6
                </Badge>
              </AccordionTrigger>
              <AccordionContent>
                <Link href="/orders/pending" className="block py-2 pl-6 text-muted-foreground">
                  Pending
                </Link>
                <Link href="/orders/completed" className="block py-2 pl-6 text-muted-foreground">
                  Completed
                </Link>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="products">
              <AccordionTrigger className="text-muted-foreground">
                <Package className="h-4 w-4" /> Products
              </AccordionTrigger>
              <AccordionContent>
                <Link href="/products/new" className="block py-2 pl-6 text-muted-foreground">
                  New Products
                </Link>
                <Link href="/products/bestsellers" className="block py-2 pl-6 text-muted-foreground">
                  Bestsellers
                </Link>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="customers">
              <AccordionTrigger className="text-muted-foreground">
                <Users className="h-4 w-4" /> Customers
              </AccordionTrigger>
              <AccordionContent>
                <Link href="/customers/vip" className="block py-2 pl-6 text-muted-foreground">
                  VIP Customers
                </Link>
                <Link href="/customers/all" className="block py-2 pl-6 text-muted-foreground">
                  All Customers
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </aside>
  );
}
