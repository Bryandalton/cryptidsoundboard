import { useState, useEffect } from "react";
import CryptidCard from "./pages/components/cryptidCard";
import { cryptidData } from "./assets/data";
import "./App.css";
import { SoundButtons } from "./pages/soundButtons";
import styled from "styled-components";
import { preloadAllSounds } from "./soundMap";
console.log(cryptidData);

const PageWrapper = styled.div`
  display: flex;
  position: absolute;
  inset: 0;
`;

const CryptidBoard = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 20vw;
  border-right: white solid 2px;
  padding: 1rem;
  overflow-y: auto;
`;

function App() {
  useEffect(() => {
    preloadAllSounds();
  }, []);
  const [currentCryptid, setCryptid] = useState(0);
  const curCryptid = cryptidData.cryptids[currentCryptid];
  return (
    <>
      <PageWrapper>
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
      </PageWrapper>
    </>
  );
}

export default App;
