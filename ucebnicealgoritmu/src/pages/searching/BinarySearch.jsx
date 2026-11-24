import AlgorithmLayout from "../../components/AlgorithmLayout";

function BinarySearch() {
  return (
    <AlgorithmLayout
      name="Binary Search"

      translation="Binární vyhledávání, hledání půlením intervalu"
      
      mainInfo= {
        `Binární vyhledávání, zvané též vyhledávání půlením intervalu, je vyhledávací algoritmus pro nalezení specifikované hodnoty, popř. vyloučení její přítomnosti, v seřazené sadě prvků, který uspořádání kolekce využívá k určení poloviny úseku, v níž se hledaná hodnota (z titulu setřídění) nemůže vyskytovat, na základě jejího porovnání s prvkem ve středu tohoto úseku, tzn. jeho mediánem, přičemž tento krok se — nepřipadne-li zadaná hodnota na některý medián — rekurzivně opakuje až do zkrácení úseku na nulovou délku. Binární vyhledávání je příkladem algoritmu typu rozděl a panuj.`
      }

        explanation={
        ``
      }

      visual=""

      javaCode={
        ``
      }
      
      complexity=""
    />
  );
}

export default BinarySearch;