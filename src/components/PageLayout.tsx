import React from "react";
import Navbar from "./Navbar/Navbar";
import NavLink from "./Navbar/NavLink";
import Dropdown from "./Navbar/Dropdown";
import DDItem from "./Navbar/DDItem";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";
import { GiWeightLiftingUp } from "react-icons/gi";

interface PageLayoutProps {
  children?: React.ReactNode;
}

function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex flex-col gap-10">
      <Navbar>
        <NavLink href="#">Home</NavLink>
        <Dropdown name="Chi Siamo">
          <div className="flex flex-col gap-2">
            <DDItem href="#" name="Contatti">
              <FaRegQuestionCircle size={20} />
            </DDItem>
            <DDItem href="#" name="Maestro">
              <FaBookBookmark size={20} />
            </DDItem>
            <DDItem href="#" name="Corsi">
              <GiWeightLiftingUp size={20} />
            </DDItem>
          </div>
        </Dropdown>
        <NavLink href="#">Media</NavLink>
        <NavLink href="#">Il Judo</NavLink>
      </Navbar>

      <main className="min-h-screen">{children}</main>
    </div>
  );
}

export default PageLayout;
