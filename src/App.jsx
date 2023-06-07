import { useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  // eslint-disable-next-line
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Soy lo que esta pasado a la propiedad greeting" />
    </div>
  );
}

export default App;
