import React from "react";

interface SidebarProps {
  children?: React.ReactNode;
  open: boolean;
}

function Sidebar({ open, children }: SidebarProps) {
  return (
    <div>
      <div
        className={`sb-content absolute top-24.4 left-0 z-50 flex flex-col gap-16 items-center bg-green-700/94 h-full ${
          open ? "full" : "hidden"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default Sidebar;
