import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-green-400 p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold"><NavLink to="/">{`{Colab}ora`}</NavLink></h1>
        <ul className="flex gap-4 font-medium">
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/team">Team</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>

  )
}

export default Navbar