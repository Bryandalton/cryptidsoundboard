import styled from "styled-components";
import SoundButton from "./components/soundButton";


const SoundBoard = styled.section`
  height: 80vh;
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: 15rem 15rem;
  gap: 3rem;
  margin-left: 20vw;
  @media (max-width: 768px) {
    grid-template-columns: 15rem;
  }
`;
export function SoundButtons({sounds, theme}) {
  return (
    <SoundBoard className={`theme-${theme}`}>
      {sounds.map((buttonText, idx) => {
        return <SoundButton key={idx} label={buttonText}/>
      })}
    </SoundBoard>
  );
}
