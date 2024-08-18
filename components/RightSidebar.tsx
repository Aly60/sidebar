// components/RightSidebar.tsx
import React from "react";

type RightSidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
  changeButtonColor: (color: string) => void; // New prop for color change
};

export default function RightSidebar({
  isOpen,
  toggleSidebar,
  changeButtonColor,
}: RightSidebarProps) {
  return (
    <aside
      className={`fixed inset-y-0 right-0 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out bg-muted/40  border-l`}
    >
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <button onClick={toggleSidebar} className="ml-auto">
            Close
          </button>
          <h1>Right Sidebar</h1>
        </div>

        {/* Buttons to change button colors */}
        <div className="p-4">
          <h2>Change Button Colors:</h2>
          <div className="flex gap-2 mt-2">
            <button
              className="p-2 bg-red-500 text-white"
              onClick={() => changeButtonColor("bg-red-500")}
            >
              Red
            </button>
            <button
              className="p-2 bg-blue-500 text-white"
              onClick={() => changeButtonColor("bg-blue-500")}
            >
              Blue
            </button>
            <button
              className="p-2 bg-green-500 text-white"
              onClick={() => changeButtonColor("bg-green-500")}
            >
              Green
            </button>
            <button
              className="p-2 bg-yellow-500 text-white"
              onClick={() => changeButtonColor("bg-yellow-500")}
            >
              Yellow
            </button>
            <button
              className="p-2 bg-purple-500 text-white"
              onClick={() => changeButtonColor("bg-purple-500")}
            >
              Purple
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
