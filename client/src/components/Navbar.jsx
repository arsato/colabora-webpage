import { NavLink } from "react-router-dom";
import Flower from "../assets/flower.png";
import { LuMail, LuMenu, LuX } from "react-icons/lu";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

const Navbar = () => {
  const activeStyle =
    "md:hover:scale-105 transition-transform ease-in-out duration-300";
  const [showMenu, setShowMenu] = useState(false);
  const [menuStyle, setMenuStyle] = useState("top-[-400px]");

  const showMenuHandler = () => {
    !showMenu
      ? setMenuStyle("top-[80px]")
      : setMenuStyle("top-[-400px]");
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className={`flex items-center gap-4 ${activeStyle}`} onClick={showMenu && showMenuHandler}>
          <div className="w-12 rounded-lg overflow-hidden">
            <img src={Flower} alt="una flor muy bonita" />
          </div>
          <h1 className="text-xl font-bold">{`{Colab}ora`}</h1>
        </NavLink>
        <span
          className="text-3xl cursor-pointer md:hidden block"
          onClick={showMenuHandler}
        >
          {!showMenu ? <LuMenu /> : <LuX />}
        </span>
        <ul
          className={`flex flex-col md:flex-row md:items-center md:z-auto md:static absolute w-full left-0 text-xl md:text-base text-center bg-white gap-4 p-6 md:p-0 shadow-xl md:shadow-none md:gap-8 font-medium md:w-auto md:opacity-100 transition-all ease-in-out duration-300 ${menuStyle}`}
        >
          <li className={activeStyle} onClick={showMenuHandler}>
            <NavLink to="/about">Nosotros</NavLink>
          </li>
          <li className={activeStyle} onClick={showMenuHandler}>
            <NavLink to="/services">Servicios</NavLink>
          </li>
          <li className={activeStyle} onClick={showMenuHandler}>
            <NavLink to="/team">Equipo</NavLink>
          </li>
          <li className={activeStyle} onClick={showMenuHandler}>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <NavLink to="/contact">
            <li
              className={`flex items-center justify-center gap-2 bg-zinc-400 text-white px-4 py-2 rounded-full ${activeStyle}`}
              onClick={showMenuHandler}
            >
              Contact
              <LuMail />
            </li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
