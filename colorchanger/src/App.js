import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState("olive")
  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-10 shadow-lg bg-black rounded-3xl px-3 py-2">
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}} onClick={() => setColor("red")}>Red</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}} onClick={() => setColor("Green")}>Green</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}} onClick={() => setColor("Blue")}>Blue</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "yellow"}} onClick={() => setColor("Yellow")}>Yellow</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "indigo"}} onClick={() => setColor("Indigo")}>Indigo</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "gray"}} onClick={() => setColor("Gray")}>Gray</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "pink"}} onClick={() => setColor("Pink")}>Pink</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "violet"}} onClick={() => setColor("Violet")}>Violet</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
