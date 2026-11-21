import { NavLink } from "react-router"
import { useState } from "react-router"
import logo from "../assets/gyarabLogo.png"

function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header className="navbar">
      <NavLink to="/" className="logo">
        <img src={logo} alt="Gyarab Logo" />
        <span>Učebnice Algoritmů</span>
        
      </NavLink>

      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        
        <div className="dropdown">
            <button className="dropdown-button" 
            onClick={() => setDropdownOpen(!dropdownOpen)}>
                Algoritmy <span className="dropdown-arrow">▼</span>
            </button>

            {dropdownOpen && (
            <div className="dropdown-menu">
              <NavLink
                to="/searching"
                onClick={() => setDropdownOpen(false)}
              >
                Searching
              </NavLink>

              <NavLink
                to="/sorting"
                onClick={() => setDropdownOpen(false)}
              >
                Sorting
              </NavLink>

              <NavLink
                to="/special-data-types"
                onClick={() => setDropdownOpen(false)}
              >
                Special Data Types
              </NavLink>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;