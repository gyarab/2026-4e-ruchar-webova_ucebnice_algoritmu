import { Link } from "react-router";

function Sorting() {
  return (
    <section className="page">
      <h1>Třídící algoritmy</h1>

      <p>Třídící (alternativně řadící) algoritmy slouží k uspořádání prvků v dané sadě prvků (např. pole, seznam, soubor, ...)
        do požadovaného pořadí (např. od největšího po nejmenší)
      </p>

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
