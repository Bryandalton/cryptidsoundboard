import styled from "styled-components";

const StyledButton = styled.button`
   {
    color: var(--grn-neon);
    background-color: hsl(323 21% 16%);
    border: var(--grn-neon) 0.125em solid;
    text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.5), 0 0 0.5em currentcolor;
    box-shadow: inset 0 0 0.5em 0 var(--grn-neon), 0 0 0.5em 0 var(--grn-neon);
    font-size: 2rem;
    cursor: pointer;
    text-decoration: none;
    padding: 0.25em 1em;
    border-radius: 0.25em;
    position: relative;
    transition: background-color 100ms linear;
    outline: 0;
    &:hover {
      background: var(--grn-neon);
      color: hsl(323 21% 16%);
      text-shadow: none;
    }
    .theme-red & {
      color: var(--red-neon);
      background-color: hsl(323 21% 16%);
      border: var(--red-neon) 0.125em solid;
      text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.5), 0 0 0.5em currentcolor;
      box-shadow: inset 0 0 0.5em 0 var(--red-neon), 0 0 0.5em 0 var(--red-neon);
      &:hover {
      background: var(--red-neon);
      color: hsl(323 21% 16%);
      text-shadow: none;

    }
  }
`;

function SoundButton({ label }) {
  return <StyledButton>{label}</StyledButton>;
}

export default SoundButton;
