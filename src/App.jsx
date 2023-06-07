import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  // eslint-disable-next-line
  const [count, setCount] = useState(0);

  fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(console.log);

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Soy lo que esta pasado a la propiedad greeting" />
      <ItemCount initial={1} stock={10} onAdd={(quantity)=> console.log('Cantidad agregada ', quantity)}/>
    </div>
  );
}

export default App;
