import { useState } from "react";
import { NavbarMenu } from "../mockData/Data";
import { MdMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

import logo from "../assets/kevinRushLogo.png";
import { PiShoppingCartThin } from "react-icons/pi";
import ResponsiveMenu from "./ResponsiveMenu";

const NavBar2 = () => {
  const [Open, setOpen] = useState(false);

  return (
    <>
      <nav className={` mb-20 ${Open ? "pb-40" : ""} md:mb-20`}>
        <div className=" flex justify-between items-center py-8">
          {/* Logo Section */}
          <div className="flex shrink-0 items-center">
            <img className="mx-2 w-10" src={logo} alt="logo" />
          </div>
          {/* Menu Section */}
          <div className="hidden md:block">
            <div className="flex items-center gap-4 text-white ">
              {NavbarMenu.map((item) => {
                return (
                  <>
                    <div key={item.id}>
                      <a
                        href={item.href}
                        className="inline-block py-1 hover:text-yellow-700 font-semibold"
                      >
                        {item.title}
                      </a>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          {/* Icon Section */}
          <div className="flex items-center gap-2">
            <button className="text-2xl hover:bg-yellow-700 hover:text-white p-2  rounded-full duration-200">
              <CiSearch />
            </button>
            <button className="text-2xl hover:bg-yellow-700 hover:text-white p-2 rounded-full duration-200">
              <PiShoppingCartThin />
            </button>
            <button className="hover:bg-amber-700 text-yellow-400 font-semibold hover:text-white rounded-md border-2 border-yellow-700 px-4 py-1 duration-200 hidden md:block">
              Login
            </button>
          </div>
          {/* Mobile hamburger Menu Section */}
          <div onClick={() => setOpen(!Open)} className="md:hidden">
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </nav>

      {/* Mobile sidebar Menu Section */}
      <ResponsiveMenu open={Open} />
    </>
  );
};

export default NavBar2;
