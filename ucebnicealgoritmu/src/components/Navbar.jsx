import { NavLink } from "react-router";

function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="logo">
        AlgorithmTextbook
      </NavLink>

      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/sorting">Sorting</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;