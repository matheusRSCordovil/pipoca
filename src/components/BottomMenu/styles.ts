import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 77px;
  width: 100%;
  font-family: Roboto-Condensed;
  position: sticky;
  bottom: 0;
  height: 77px;
  background-color: #ffffff;
  box-shadow: 0px -2px 7px 0px #00000040;
  z-index: 200;

  img.ativo {
    position: relative;
    bottom: 18px;
  }
`;
