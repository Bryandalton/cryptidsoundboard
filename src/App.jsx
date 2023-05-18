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

const BoardName = styled.h1`
  color: var(--grn-neon);
  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.5), 0 0 0.5em currentcolor;

  .theme-red & {
    color: var(--red-neon);
    text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.5), 0 0 0.5em currentcolor;
  }
`;

function App() {
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
        <BoardName theme={curCryptid.theme}>{`${curCryptid.name} Sound Board`}</BoardName>
        <SoundButtons theme={curCryptid.theme} buttons={curCryptid.buttons} />
      </div>
    </>
  );
}

export default App;
