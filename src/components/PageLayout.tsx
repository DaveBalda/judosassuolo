import React from "react";
import Navbar from "./Navbar/Navbar";
import NavLink from "./Navbar/NavLink";
import Dropdown from "./Navbar/Dropdown";

interface PageLayoutProps {
  children?: React.ReactNode;
}

function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex flex-col gap-10">
      <Navbar>
        <Dropdown name="Home">
          <p>Element 1</p>
          <p>Element 2</p>
        </Dropdown>
        <NavLink href="#">Chi Siamo</NavLink>
        <NavLink href="#">Media</NavLink>
        <NavLink href="#">Il Judo</NavLink>
      </Navbar>

      <main className="min-h-screen">{children}</main>
    </div>
  );
}

export default PageLayout;
