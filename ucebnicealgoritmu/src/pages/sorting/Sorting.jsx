import { Link } from "react-router";

function Sorting() {
  return (
    <section className="page">
      <h1>Třídící algoritmy</h1>

      <div className="algorithm-list">
        <Link to="/sorting/bubble-sort">
          Bubble Sort
        </Link>
        <br></br>
        <Link to="/sorting/insert-sort">
          Insert Sort
        </Link>
        <br></br>
        <Link to="/sorting/select-sort">
          Select Sort
        </Link>
        <br></br>
      </div>
    </section>
  );
}

export default Sorting;
