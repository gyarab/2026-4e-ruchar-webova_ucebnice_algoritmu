import { Link } from "react-router";

function SpecialDataTypes() {
  return (
    <section className="page">
      <h1>Speciální datové typy</h1>

      <div className="algorithm-list">
        <Link to="/special-data-types/heap">
          Heap
        </Link>
        <br></br>

        <Link to="/special-data-types/queue">
          Queue
        </Link>
        <br></br>

        <Link to="/special-data-types/stack">
          Stack
        </Link>
        <br></br>
      </div>
    </section>
  );
}

export default SpecialDataTypes;