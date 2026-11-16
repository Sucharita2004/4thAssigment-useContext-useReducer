
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative px-5 py-2.5 text-sm font-semibold tracking-wide rounded-xl transition-all duration-300 ${
      isActive
        ? "text-[#123B3A] bg-[#D5E9E2] shadow-[0_4px_15px_rgba(213,233,226,0.2)]"
        : "text-white hover:text-[#D5E9E2] hover:bg-[#3B716B]"
    }`;

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#285B57] text-white border-b border-white/10 shadow-[0_4px_20px_rgba(40,91,87,0.2)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="group flex flex-col">
          <span className="text-2xl font-extrabold tracking-wider bg-gradient-to-r from-[#D5E9E2] to-white bg-clip-text text-transparent transition-all duration-300 group-hover:tracking-[3px]">
            LOGO
          </span>

        </NavLink>

        {/* Navigation Links */}
        <div className="flex items-center gap-3">

          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/shopping-cart" className={navLinkClass}>
            Shopping Cart
          </NavLink>

          <NavLink to="/multi-step-form" className={navLinkClass}>
            Multi-Step Form
          </NavLink>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
