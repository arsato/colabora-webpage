import { NavLink } from "react-router-dom";
import Flower from "../assets/flower.png";
import { LuMail } from "react-icons/lu";
import { useState } from "react";

const Navbar = () => {
  const activeStyle = "hover:scale-105 transition-transform ease-in-out duration-300"
  const [showMenu, setShowMenu] = useState(false)
  const [menuStyle, setMenuStyle] = useState("")

  const showMenuHandler = () => {
    showMenu ? setMenuStyle("top-[80px] opacity-100 z-1") : setMenuStyle("top-0 opacity-100")
    setShowMenu(!showMenu)
  }

  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className={`flex items-center gap-4 ${activeStyle}`}>
          <div className="w-12 rounded-lg overflow-hidden">
            <img src={Flower} alt="una flor muy bonita" />
          </div>
          <h1 className="text-xl font-bold">{`{Colab}ora`}</h1>
        </NavLink>
        <span className="text-3xl cursor-pointer md:hidden block" 
          onClick={showMenuHandler}
        >
          X
        </span>
        <ul className={`md:flex md:items-center z-[1] md:z-auto md:static absolute w-full left-0 bg-white gap-8 font-medium md:w-auto md:opacity-100 opacity-100 top-[-400px] transition-all ease-in-out duration-500 ${menuStyle}`}>
          <li className={activeStyle}>
            <NavLink to="/about">Nosotros</NavLink>
          </li>
          <li className={activeStyle}>
            <NavLink to="/services">Servicios</NavLink>
          </li>
          <li className={activeStyle}>
            <NavLink to="/team">Equipo</NavLink>
          </li>
          <li className={activeStyle}>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <NavLink to="/">
            <li className={`flex items-center gap-2 bg-zinc-400 text-white px-4 py-2 rounded-full ${activeStyle}`}>
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
