import React from "react";

interface DDItemProps {
  children?: React.ReactNode;
  name: string;
  href: string;
}

function DDItem({ children, name, href }: DDItemProps) {
  return (
    <div className="flex flex-row gap-3 px-2 py-2 hover:bg-green-600 items-center rounded-xl">
      <span className="px-2 py-2 bg-green-800 rounded-xl">{children}</span>
      <a href={href}>{name}</a>
    </div>
  );
}

export default DDItem;
