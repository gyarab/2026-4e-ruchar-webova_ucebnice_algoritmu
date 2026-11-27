import { Link } from "react-router";

function Sorting() {
  return (
    <section className="page">
      <h1>Třídící algoritmy</h1>

      <p>Třídící (alternativně řadící) algoritmy slouží k uspořádání prvků v dané sadě prvků (např. pole, seznam, soubor, ...)
        do požadovaného pořadí. Prvky v sadě jsou zpravidla buď numerické (např. int), které se řadí podle jejich číselné hodnoty, 
        nebo řetězcové (např. String), které se řadí nejčastěji abecedně.
      </p>

      <div className="algorithm-list">
      <h2>Třídění záměnou</h2>
      <ul>
        <li>
        <Link to="/sorting/bubble-sort">
          Bubble Sort
        </Link>
        </li>
        <li>
          <Link to="/sorting/quick-sort">
          Quick Sort
        </Link>
        </li>
        <li>
          Heap Sort
        </li>
      </ul>

      <h2>Třídění výběrem</h2>
      <ul>
        <li>
        <Link to="/sorting/select-sort">
          Select Sort
        </Link>
        </li>
      </ul>

      <h2>Třídění vkládáním</h2>
      <ul>
        <li>
        <Link to="/sorting/insert-sort">
          Insert Sort
        </Link>
        </li>
      </ul>
      
      <h2>Třídění slučováním</h2>
      <ul>
        <li>
        <Link to="/sorting/merge-sort">
          Merge Sort
        </Link>
        </li>
      </ul>


      </div>
    </section>
  );
}

export default Sorting;
