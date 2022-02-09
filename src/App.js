import { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import Album from "./components/Album";
import Button from "./components/Button";

function App() {
  const [albums, setAlbums] = useState([]);
  const [contador, setContador] = useState(0);

  console.log("renderizou o pai")

  const buscaAlbums = () => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((r) => r.json())
      .then((r) => setAlbums(r));
  };

   //a função incrementa, chama o valor aqui direto na tag, por isso mesmo com o callback, nao "funciona".
  //não existe aqui nenhum outra função/componente memorizada para comparar.
  const incrementaContador = useCalback( () => {
    setContador((c) => c + 1);
  }, []);

  //a função decrementa, é passado como props para um Componente e para um função dentro desse componente que esta memorizada.
  //como nada se altera, ela nao renderiza novamente
  //ps: se você adicionar o ${contador}, dentro da template string do Text, esse valor vai se alterar, e mesmo com o callback ela vai ser executada.
  const decrementaContador =  useCallback (() => {
    setContador((c) => c + -1);    
  }, []);

  useEffect(buscaAlbums, []);

  const funcaoTeste = () => {
    console.log("Rodou teste");
  };

  return (
    <div className="App">
      <button onClick={incrementaContador}>Contador: {contador} +</button>
      <Button decrementa={decrementaContador} text={`Decrementa -`}/>
      <h1>Albums</h1>
      {useMemo(() => {
        return albums.map((a) => <Album key={a.id} album={a} />);
      }, [albums])}
    </div>
  );
}

export default App;
