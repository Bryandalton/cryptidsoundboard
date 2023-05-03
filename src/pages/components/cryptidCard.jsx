import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  border: white 1px solid;
  color: white; /*temp*/
  border-radius: 1rem;
  margin: 0 auto;
  max-width: 50%;
  min-width: 30%;

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
function CryptidCard() {
  return (
    <StyledCard>
      <img src="./images/bigfoot.JPG"></img>
      <p>Bigfoot</p>
    </StyledCard>
  );
}

export default CryptidCard;
