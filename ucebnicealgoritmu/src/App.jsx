
import { Routes, Route } from "react-router";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Searching from "./pages/Searching";
import Sorting from "./pages/Sorting";
import SpecialDataTypes from "./pages/SpecialDataTypes";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sorting" element={<Sorting />} />
        <Route path="/searching" element={<Searching />} />
        <Route path="/special-data-types"
          element={<SpecialDataTypes />}
        />
      </Route>
    </Routes>
  );
}

export default App;
