import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import BottomNavbar from "../components/BottomNavbar";  
import BackButton from "../components/BackButton";

function MainLayout() {
  return (
    <div className="layout">
      <Navbar />

      <main className="main-content">
        <BackButton />

        <Outlet />
      </main>

      <BottomNavbar />
    </div>
  );
}

export default MainLayout;