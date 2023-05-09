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
  const [currentCryptid, setCryptid] = useState(0);
  const [cryptidName, setName] = useState("Sasquach")
  const [theme, setTheme] = useState("green")

  return (
    <>
    <h1>{`${cryptidName} Sound Board`}</h1>
      <div>
        <CryptidBoard className="cryptidBoard">
          {cryptidData.cryptids.map((cryptid, idx) => {
            return (
              <CryptidCard
                key={cryptid.name}
                image={cryptid.image}
                name={cryptid.name}
                onClick={() => {
                  console.log("click", cryptid);
                  setName(cryptid.name)
                  setTheme(cryptid.theme)
                  setCryptid(idx)
                }}
              />
            );
          })}
        </CryptidBoard>

        <SoundButtons theme = {theme} sounds={cryptidData.cryptids[currentCryptid].sounds} />
      </div>
    </>
  );
}

export default App;
