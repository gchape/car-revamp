import { motion } from "motion/react";
import { NavLink } from "react-router";
import Socials from "../components/Socials";
import { menuItems } from "../ts/data";

function Navbar() {
  return (
    <div className="navbar bg-transparent p-5 md:pt-0 z-100 font-arial-geo tracking-wide">
      <div className="navbar-start">
        <NavLink className="logo" to={"/"} />
      </div>

      <div className="navbar-end md:flex md:min-w-[60%] md:navbar-end lg:justify-center">
        <motion.ul
          className="menu menu-horizontal p-1 rounded-md bg-[#1e1c1a]"
          layout
        >
          {menuItems.map(({ title, path }, index) => (
            <NavLink key={index} to={path} className="w-full md:w-fit">
              {({ isActive }) => (
                <motion.li className="relative">
                  {isActive && (
                    <motion.div
                      layoutId="menuItem-bg"
                      className="absolute inset-0 bg-[#991d1a] rounded-md z-0"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10 btn bg-transparent hover:bg-transparent justify-center">
                    {title}
                  </span>
                </motion.li>
              )}
            </NavLink>
          ))}
        </motion.ul>
      </div>

      <div className="navbar-end hidden lg:flex">
        <Socials />
      </div>
    </div>
  );
}

export default Navbar;
