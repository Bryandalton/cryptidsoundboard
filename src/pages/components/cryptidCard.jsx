import React from "react";
import styled from "styled-components";

const StyledCard = styled.button`
  border: white 1px solid;
  color: white; /*temp*/
  border-radius: 1rem;
  margin: 0 auto;
  width: 50%;
  pointer-events: all;
  background-color: black;

  p {
    font-size: 2em;
    margin: 0;
  }

  img {
    max-width: 100%;
    border-radius: 1rem;
  }

  @media (max-width: 980px) {
    p {
      font-size: 1.5em;
    }
  }
`;
function CryptidCard({image, name, onClick}) {
  return (
    <StyledCard onClick={onClick}>
      <img src={image}></img>
      <p>{name}</p>
    </StyledCard>
  );
}

export default CryptidCard;
