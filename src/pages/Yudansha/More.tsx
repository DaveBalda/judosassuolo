import React, { useState } from "react";

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
        className="hover:cursor-pointer hover:bg-gray-300 flex flex-row justify-center items-center gap-1 rounded-lg px-3 py-2"
      >
        <p className="italic text-lg">Mostra altri</p>
        <p className="text-lg">...</p>
      </button>
    </div>
  );
}

export default More;
