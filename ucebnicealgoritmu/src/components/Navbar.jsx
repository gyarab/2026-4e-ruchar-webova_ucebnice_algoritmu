import { NavLink } from "react-router"
import { useState } from "react"
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
                Vyhledávací
              </NavLink>

              <NavLink
                to="/sorting"
                onClick={() => setDropdownOpen(false)}
              >
                Třídící
              </NavLink>

              <NavLink
                to="/special-data-types"
                onClick={() => setDropdownOpen(false)}
              >
                Speciální datové typy
              </NavLink>
            </div>
          )}
        </div>

        <NavLink to="/">Home</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;