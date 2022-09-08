import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  min-height: 100vh;
  height: fit-content;
  width: 100%;
  font-family: Roboto-Condensed;

  @media (max-width: 389px) {
    min-height: 120vh;
  }
`;
