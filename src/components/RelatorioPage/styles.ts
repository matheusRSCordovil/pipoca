import styled from "styled-components";
import { PRIMARY } from "../../theme/palette";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  width: 100%;
  font-family: Roboto-Condensed;
  margin-top: 161px;

  .registro-diario-box {
    position: relative;
    height: 48px;
    width: 100%;
    border-radius: 0px;
    box-shadow: 0px 1px 11px 2px #00000026;

    img {
      position: absolute;
      right: 20px;
      top: 17px;
    }

    p {
      font-size: 22px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: center;
      color: #7d7d7d;
      margin: 0;
      margin-top: 15px;
    }
  }

  h4 {
    font-size: 22px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #7d7d7d;
    padding-left: 20px;
    margin-bottom: 15px;
  }

  .resumo {
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    color: #7d7d7d;
    margin-top: 0;
    padding: 0 20px;
  }

  .grafico-titulo-container {
    display: flex;
    height: 341px;
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
  }

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
    width: 300px;
    border-radius: 0 5px 5px 0;
    color: #ffffff;
    font-size: 22px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }

  .tick-legend {
    height: 29px;
    width: 29px;
    border-radius: 3px;
    background-color: ${PRIMARY.darkBlue};
  }

  strong.intro {
    color: blue;
    background-color: blue;
  }
`;
