
function AlgorithmLayout({
  name,
  translation,
  mainInfo,
  explanation,
  visual,
  javaCode,
  complexity
}) {
  return (
    <section className="page algorithm-page">
      <h1>{name}</h1>
      <h3>{translation}</h3>

      <div className="mainInfo">
        <p>{mainInfo}</p>
      </div>
      <hr></hr>

      <div className="explanation">
        <h2>Průběh algoritmu krok po kroku</h2>
        <p>{explanation}</p>
      </div>
      <hr></hr>

      <div className="visualization">
        <h2>Vizualizace</h2>
        <img src={visual} alt={name} />
      </div>
      <hr></hr>

      <div className="java-code">
        <h2>Java implementace</h2>
        <pre><code>{javaCode}</code></pre>
      </div>
      <hr></hr>

      <div className="complexity">
        <h2>Časová komplexita algoritmu</h2>
        <p>{complexity}</p>
      </div>
    </section>
  );
}

export default AlgorithmLayout;
