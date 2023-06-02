import React from "react";
import styled from "styled-components";

const StyledCard = styled.button`
  border: white 1px solid;
  width: 60%;
  color: white;
  margin: 0 auto; //at largest break point centers the cards
  border-radius: 1rem;
  padding: .5rem 1rem;
  pointer-events: all;
  background-color: black;
  @media (max-width: 1730px){
    width:100%
  }

  p {
    flex: 1 1 auto;
    margin: 0;
    font-size: clamp(.1rem, 2vw, 2rem);

  }

  img {
    width: clamp(50%, 100%, 100%);
    border-radius: .5rem;
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
