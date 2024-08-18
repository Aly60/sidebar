import React from "react";
import { Button } from "./button";
import { Menu } from "lucide-react";
import { ModeToggle } from "../components/mode-toggle";

type NavbarProps = {
  toggleSidebar: () => void;
  toogleRightSidebar: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar, toogleRightSidebar }) => {
  return (
    <header className="fixed top-0 w-full bg-gray-800 text-white z-50 flex items-center p-4 shadow-lg">
      <Button variant="outline" size="icon" onClick={toggleSidebar}>
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle sidebar</span>
      </Button>
      
      <div className="ml-4 font-bold">My App</div>
      <ModeToggle />
      <Button variant="outline" size="icon" onClick={toogleRightSidebar} className="ml-auto">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle right sidebar</span>
      </Button>
    </header>
  );
};

export default Navbar;
