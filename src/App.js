import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Album from "./components/Album";

function App() {
  const [albums, setAlbums] = useState([]);
  const [contador, setContador] = useState(0);

  const buscaAlbums = () => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((r) => r.json())
      .then((r) => setAlbums(r));
  };

  const incrementaContador = () => {
    setContador((c) => c + 1);
  };

  useEffect(buscaAlbums, []);

  const funcaoTeste = () => {
    console.log("Rodou teste");
  };

  return (
    <div className="App">
      <button onClick={incrementaContador}>Contador: {contador} +</button>
      <button onClick={funcaoTeste}>Teste</button>
      <h1>Albums</h1>
      {useMemo(() => {
        return albums.map((a) => <Album key={a.id} album={a} />);
      }, [albums])}
    </div>
  );
}

export default App;
