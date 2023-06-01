import styled from "styled-components";
import SoundButton from "./components/soundButton";

const SoundPanel = styled.section``;
const SoundBoard = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: repeat(2, 15rem);
  gap: 3rem;
  margin-left: 20vw;
  @media (max-width: 768px) {
    grid-template-columns: 15rem;
  }
`;
const BoardName = styled.h1`
  margin: 0;
  margin-left: 20vw;
  padding: 4rem 0 4rem 0;
  color: var(--grn-neon);
  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.5), 0 0 0.5em currentcolor;

  .theme-red & {
    color: var(--red-neon);
    text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.5), 0 0 0.5em currentcolor;
  }
  .theme-blue & {
    color: var(--blue-neon);
    text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.5), 0 0 0.5em currentcolor;
  }
`;
export function SoundButtons({ cryptid }) {
  return (
    <SoundPanel className={`theme-${cryptid.theme}`}>
      <BoardName>{`${cryptid.name} Sound Board`}</BoardName>
      <SoundBoard>
        {cryptid.buttons.map((button, idx) => {
          return (
            <SoundButton key={idx} label={button.label} sound={button.sound} />
          );
        })}
      </SoundBoard>
    </SoundPanel>
  );
}
