import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import BottomNavbar from "../components/BottomNavbar";  

function MainLayout() {
  return (
    <div className="layout">
      <Navbar />

      <main className="main-content">
        <Outlet />
      </main>

      <BottomNavbar />
    </div>
  );
}

export default MainLayout;