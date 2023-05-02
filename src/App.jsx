import { useState } from "react";
import CryptidCard from "./pages/components/cryptidCard";
import { cryptidData } from './assets/data'
import "./App.css";
import { SoundButtons } from "./pages/soundButtons";
console.log(cryptidData)


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <aside className="cryptidBoard">
          <CryptidCard />
        </aside>
        <SoundButtons/>
      </div>
    </>
  );
}

export default App;
