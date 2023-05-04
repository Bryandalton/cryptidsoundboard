import { useState } from "react";
import CryptidCard from "./pages/components/cryptidCard";
import { cryptidData } from "./assets/data";
import "./App.css";
import { SoundButtons } from "./pages/soundButtons";
import styled from "styled-components";
console.log(cryptidData);

const CryptidBoard = styled.aside`
  float: left;
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100vh;
  width: 20vw;
  border-right: white solid 2px;
  padding: 1rem;
`;

function App() {
  const [count, setCount] = useState(0);
  const currentCryptid = 0;
  return (
    <>
      <div>
        <CryptidBoard className="cryptidBoard">
          {cryptidData.cryptids.map((cryptid) => {
            return (
              <CryptidCard
                key={cryptid.name}
                image={cryptid.image}
                name={cryptid.name}
                onClick={() => {
                  console.log("click");
                }}
              />
            );
          })}
        </CryptidBoard>

        <SoundButtons sounds={cryptidData.cryptids[currentCryptid].sounds} />
      </div>
    </>
  );
}

export default App;
