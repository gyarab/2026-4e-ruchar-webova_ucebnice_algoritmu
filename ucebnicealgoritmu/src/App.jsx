
import { Routes, Route } from "react-router";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";

import Searching from "./pages/searching/Searching";
import LinearSearch from "./pages/searching/LinearSearch";
import BinarySearch from "./pages/searching/BinarySearch";
import MinMaxSearch from "./pages/searching/MinmaxSearch";


import Sorting from "./pages/sorting/Sorting";
import BubbleSort from "./pages/sorting/BubbleSort";
import InsertSort from "./pages/sorting/InsertSort";
import SelectSort from "./pages/sorting/SelectSort";

import SpecialDataTypes from "./pages/special/SpecialDataTypes";
import Queue from "./pages/special/Queue";
import Heap from "./pages/special/Heap";
import Stack from "./pages/special/Stack";


function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/searching" element={<Searching />} />
        <Route
          path="/searching/linear-search"
          element={<LinearSearch />}
        />
        <Route
          path="/searching/binary-search"
          element={<BinarySearch />}
        />
        <Route
          path="/searching/minmax-search"
          element={<MinMaxSearch />}
        />

        <Route path="/sorting" element={<Sorting />} />
        <Route
          path="/sorting/bubble-sort"
          element={<BubbleSort />}
        />
        <Route
          path="/sorting/insert-sort"
          element={<InsertSort />}
        />
        <Route
          path="/sorting/select-sort"
          element={<SelectSort />}
        />

        <Route
          path="/special-data-types"
          element={<SpecialDataTypes />}
        />
        <Route
          path="/special-data-types/stack"
          element={<Stack />}
        />
        <Route
          path="/special-data-types/linked-list"
          element={<Queue />}
        />
        <Route
          path="/special-data-types/binary-tree"
          element={<Heap />}
        />
      </Route>
    </Routes>
  );
}

export default App;
