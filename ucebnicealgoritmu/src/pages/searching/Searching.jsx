import { Link } from "react-router";

function Searching() {
  return (
    <section className="page">
      <h1>Vyhledávací algoritmy</h1>

      <div className="algorithm-list">
        <Link to="/searching/binary-search">
          Binary Search
        </Link>
        <br></br>

        <Link to="/searching/linear-search">
          Linear Search
        </Link>
        <br></br>

        <Link to="/searching/minmax-search">
          Min-Max Search
        </Link>
        <br></br>
      </div>
    </section>
  );
}

export default Searching;