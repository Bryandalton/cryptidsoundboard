import { useState } from "react";
import CryptidCard from "./pages/components/cryptidCard";
import { cryptidData } from "./assets/data";
import "./App.css";
import { SoundButtons } from "./pages/soundButtons";
console.log(cryptidData);

function App() {
  const [count, setCount] = useState(0);
  const currentCryptid = 0;
  return (
    <>
      <div>
        <aside className="cryptidBoard">
          {cryptidData.cryptids.map((cryptid) => {
            return <CryptidCard
              key={cryptid.name} 
              image={cryptid.image} 
              name={cryptid.name} 
              onclick={()=>{console.log("click")}}
              />;
          })}
        </aside>

        <SoundButtons sounds={cryptidData.cryptids[currentCryptid].sounds} />
      </div>
    </>
  );
}

export default App;
