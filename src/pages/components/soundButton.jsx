import styled from "styled-components";
import { playSound } from "../../soundMap";

const StyledButton = styled.button`
  color: var(--grn-neon);
  margin: 1rem;
  background-color: hsl(323 21% 16%);
  border: var(--grn-neon) 0.125em solid;
  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.5), 0 0 0.5em currentcolor;
  box-shadow: inset 0 0 0.5em 0 var(--grn-neon), 0 0 0.5em 0 var(--grn-neon);
  font-size: 2rem;
  cursor: pointer;
  padding: 0.25em 1em;
  border-radius: 0.25em;
  transition: background-color 100ms linear;
  outline: 0;
  &:hover {
    background: var(--grn-neon);
    color: hsl(323 21% 16%);
  }
  .theme-red & {
    color: var(--red-neon);
    border: var(--red-neon) 0.125em solid;
    box-shadow: inset 0 0 0.5em 0 var(--red-neon), 0 0 0.5em 0 var(--red-neon);
    &:hover {
      background: var(--red-neon);
      color: hsl(323 21% 16%);
    }
  }
  .theme-blue & {
    color: var(--blue-neon);
    border: var(--blue-neon) 0.125em solid;
    box-shadow: inset 0 0 0.5em 0 var(--blue-neon), 0 0 0.5em 0 var(--blue-neon);
    &:hover {
      background: var(--blue-neon);
      color: hsl(323 21% 16%);
    }
  }
`;

function SoundButton({ label, sound }) {
  function playButtonSound() {
    playSound(sound);
  }

  return <StyledButton onClick={playButtonSound}>{label}</StyledButton>;
}

export default SoundButton;
