import styled from "styled-components";

const StyledButton = styled.button`
   {
    color: #20cc00;
    font-size:2rem;
    cursor: pointer;
    text-decoration: none;
    border: #20cc00 0.125em solid;
    padding: 0.25em 1em;
    border-radius: 0.25em;
    background-color: hsl(323 21% 16%);
    text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.5), 0 0 0.5em currentcolor;
    box-shadow: inset 0 0 0.5em 0 #20cc00, 0 0 0.5em 0 #20cc00;
    position: relative;
    transition: background-color 100ms linear;
    &:hover {
      background: #20cc00;
      color: hsl(323 21% 16%);
      text-shadow: none; 
    }
  }
`;

function SoundButton({ label }) {
  return <StyledButton>{label}</StyledButton>;
}

export default SoundButton;
