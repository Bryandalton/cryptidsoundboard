import React from "react";
import styled from "styled-components";

const StyledCard = styled.button`
  display: flex;
  flex-direction: column;
  border: white 1px solid;
  color: white; /*temp*/
  border-radius: 1rem;
  margin: 0 auto;
  width: 50%;
  pointer-events: all;
  background-color: black;

  p {
    flex: 1 1 auto;
    font-size: 2em;
    min-width: 0;
    min-height: 0;
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
function CryptidCard({ image, name, onClick }) {
  return (
    <StyledCard onClick={onClick}>
      <img src={image}></img>
      <p>{name}</p>
    </StyledCard>
  );
}

export default CryptidCard;
