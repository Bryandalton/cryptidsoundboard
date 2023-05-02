import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  border: white 1px solid;
  color: white; /*temp*/
  border-radius: 1rem;
  margin: 0 auto;
  width: 50%;

  p {
    font-size: 2em;
    margin: 0;
  }

  img {
    max-width: 100%;
    border-radius: 1rem;
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
