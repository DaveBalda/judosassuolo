import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import NavLink from "./Navbar/NavLink";
import Dropdown from "./Navbar/Dropdown";
import SDropdown from "./Sidebar/SDropdown";
import DDItem from "./Navbar/DDItem";
import { FaBook, FaRegQuestionCircle } from "react-icons/fa";
import { GiBlackBelt, GiWeightLiftingUp } from "react-icons/gi";
import { MdSportsMartialArts } from "react-icons/md";
import { IoIosPerson } from "react-icons/io";
import Sidebar from "./Sidebar/Sidebar";
import SidebarHeader from "./Sidebar/SidebarHeader";
import SideLink from "./Sidebar/SideLink";
import SDDItem from "./Sidebar/SDDItem";
import "./components.css";
import { IoCamera, IoHome } from "react-icons/io5";

interface PageLayoutProps {
  children?: React.ReactNode;
}

function PageLayout({ children }: PageLayoutProps) {
  // Hooks
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="jcs_navbar">
        <Navbar>
          <NavLink href="#">Home</NavLink>
          <Dropdown name="Chi Siamo">
            <div className="flex flex-col gap-2">
              <DDItem href="#" name="Contatti">
                <FaRegQuestionCircle size={20} />
              </DDItem>
              <DDItem href="#" name="Maestro">
                <IoIosPerson size={20} />
              </DDItem>
              <DDItem href="#" name="Corsi">
                <GiWeightLiftingUp size={20} />
              </DDItem>
            </div>
          </Dropdown>
          <Dropdown name="Il Judo">
            <div className="flex flex-col gap-4">
              <DDItem href="#" name="Tecniche">
                <MdSportsMartialArts size={20} />
              </DDItem>
              <DDItem href="#" name="Yudansha">
                <GiBlackBelt size={20} />
              </DDItem>
              <DDItem href="#" name="Storia">
                <FaBook size={20} />
              </DDItem>
            </div>
          </Dropdown>
          <NavLink href="#">Media</NavLink>
        </Navbar>
        <main className="min-h-screen">{children}</main>
      </div>
      <div className="jcs_sidebar relative">
        <SidebarHeader open={open} setOpen={setOpen} />
        <Sidebar open={open}>
          <span></span>
          <SideLink href="#">
            <div className="flex flex-row gap-2 items-center">
              <IoHome size={25} />
              <p>Home</p>
            </div>
          </SideLink>
          <SDropdown name="Chi Siamo">
            <div className="flex flex-col gap-1 text-[16px]">
              <SDDItem href="#" name="Contatti">
                <FaRegQuestionCircle size={15} />
              </SDDItem>
              <SDDItem href="#" name="Maestro">
                <IoIosPerson size={15} />
              </SDDItem>
              <SDDItem href="#" name="Corsi">
                <GiWeightLiftingUp size={15} />
              </SDDItem>
            </div>
          </SDropdown>
          <SDropdown name="Il Judo">
            <div className="flex flex-col gap-1 text-[16px]">
              <SDDItem href="#" name="Teniche">
                <MdSportsMartialArts size={15} />
              </SDDItem>
              <SDDItem href="#" name="Yudansha">
                <GiBlackBelt size={15} />
              </SDDItem>
              <SDDItem href="#" name="Storia">
                <FaBook size={15} />
              </SDDItem>
            </div>
          </SDropdown>
          <SideLink href="#">
            <div className="flex flex-row gap-2 items-center">
              <IoCamera size={25} />
              <p>Media</p>
            </div>
          </SideLink>
        </Sidebar>
        <main className="min-h-screen">{children}</main>
      </div>
    </div>
  );
}

export default PageLayout;
