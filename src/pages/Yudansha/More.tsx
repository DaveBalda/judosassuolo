import React, { useState } from "react";
import { IoIosMore } from "react-icons/io";

interface MoreProps {
  children?: React.ReactNode;
}

function More({ children }: MoreProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className={`text-center flex flex-col gap-1 ${
          open ? "block" : "hidden"
        } `}
      >
        {children}
      </div>
      <button
        onClick={() => setOpen(!open)}
        className="hover:cursor-pointer hover:bg-gray-300 text-center gap-4 rounded-lg px-3 py-2"
      >
        <IoIosMore size={20} />
      </button>
    </div>
  );
}

export default More;
