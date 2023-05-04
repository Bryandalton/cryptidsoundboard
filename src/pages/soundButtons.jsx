import styled from "styled-components";
import SoundButton from "./components/soundButton";


const SoundBoard = styled.section`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 15rem 15rem;
  padding: 5rem;
  gap: 3rem;
  margin-left: 20vw;
  @media (max-width: 768px) {
    grid-template-columns: 15rem;
  }
`;
export function SoundButtons({sounds}) {
  return (
    <SoundBoard>
      {sounds.map((buttonText, idx) => {
        return <SoundButton key={idx} label={buttonText}/>
      })}
    </SoundBoard>
  );
}
