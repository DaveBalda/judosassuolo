import React, { useState } from "react";
import "./Navbar.css";

interface DropdownProps {
  children?: React.ReactNode;
  name: string;
}

function Dropdown({ children, name }: DropdownProps) {
  // Hooks
  const [open, setOpen] = useState(false);

  return (
    <div className="dd-container bg-inherit hover:bg-green-500 px-5 py-2 rounded-md text-neutral-200 font-bold text-lg relative">
      <div className="dd-trigger" onClick={() => setOpen(!open)}>
        <p>{name}</p>
      </div>

      <div className={`dd-menu ${open ? "active" : "inactive"}`}>
        {children}
      </div>
    </div>
  );
}

export default Dropdown;
