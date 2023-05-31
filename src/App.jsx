import { useState, useEffect } from "react";
import CryptidCard from "./pages/components/cryptidCard";
import { cryptidData } from "./assets/data";
import "./App.css";
import { SoundButtons } from "./pages/soundButtons";
import styled from "styled-components";
import { preloadAllSounds } from "./soundMap";
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
  useEffect(() => {
    preloadAllSounds();
  }, []);
  const [currentCryptid, setCryptid] = useState(0);
  const curCryptid = cryptidData.cryptids[currentCryptid];
  return (
    <>
      <div>
        <CryptidBoard className="cryptidBoard">
          {cryptidData.cryptids.map((cryptid, idx) => {
            return (
              <CryptidCard
                key={cryptid.name}
                image={cryptid.image}
                name={cryptid.name}
                onClick={() => {
                  setCryptid(idx);
                }}
              />
            );
          })}
        </CryptidBoard>
        <SoundButtons cryptid={curCryptid} />
      </div>
    </>
  );
}

export default App;
