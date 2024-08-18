"use client";

import React, { useState } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import RightSidebar from "../components/RightSidebar";
import "../app/globals.css";
import { ThemeProvider } from "../components/theme-provider";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [buttonColor, setButtonColor] = useState("bg-primary");

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const toggleRightSidebar = () => {
    setIsRightSidebarOpen(!isRightSidebarOpen);
  };

  const changeButtonColor = (color: string) => {
    setButtonColor(color);
  };

  // Type guard to check if `children` is a valid React element
  function isReactElement(
    element: React.ReactNode
  ): element is React.ReactElement {
    return React.isValidElement(element);
  }

  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar toggleSidebar={toggleSidebar} toogleRightSidebar={toggleRightSidebar} />
          <div className="flex pt-16">
            <Sidebar isOpen={isOpen} />
            <main className="flex-1 transition-all duration-300">
              {/* Check if children is a valid React element */}
              {isReactElement(children)
                ? React.cloneElement(children, { buttonColor })
                : children}
            </main>
            <RightSidebar
              isOpen={isRightSidebarOpen}
              toggleSidebar={toggleRightSidebar}
              changeButtonColor={changeButtonColor}
            />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
