import { useState } from "react";
import "./styles.css";
import Test from "./Test";

export default function App() {
  const [item, setItem] = useState();

  const trackChange = () => {
    setItem();
  };

  return (
    <div className="App">
      <h1 className="title">To-do list Application</h1>
      <input onChange={trackChange} type="text" />
      <button>Add</button>
      <br></br>
      <br></br>
      <Test />
    </div>
  );
}
