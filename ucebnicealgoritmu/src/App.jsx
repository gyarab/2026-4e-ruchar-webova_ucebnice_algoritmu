
import { Routes, Route } from "react-router";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Sorting from "./pages/Sorting";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sorting" element={<Sorting />} />
      </Route>
    </Routes>
  );
}

export default App;
