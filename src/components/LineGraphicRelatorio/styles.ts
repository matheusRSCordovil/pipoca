import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  height: 341px;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;

  .grafico-container {
    min-width: 1280px;
    height: 100%;
  }

  .grafico-titulo-container-label {
    padding-left: 20px;
    display: flex;
    align-items: center;
    min-height: 37px;
    height: 37px;
    width: 307px;
    border-radius: 0 5px 5px 0;
    color: #ffffff;
    font-size: 22px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }

  .tick-legend {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 29px;
    width: 29px;
    border-radius: 3px;
    font-family: Roboto-Condensed;
    font-size: 10px;
    font-weight: 700;
    line-height: 9px;
    letter-spacing: -0.02em;
    text-align: center;
    color: #104f92;
  }
`;
