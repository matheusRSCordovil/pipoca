import styled from "styled-components";
import { PRIMARY } from "../../theme/palette";

export const MainContainer = styled.div`
  display: flex;
  height: 341px;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;

  span {
    position: sticky;
    margin: auto 0px;
    left: 0px;
    z-index: 100;
    height: 300px;
    width: 120px;
    display: flex;
    padding-left: 20px;
    background: linear-gradient(90deg, rgb(255, 255, 255) 70%, transparent 30%);
  }

  span > img:first-child {
    height: 243px;
    width: 69px;
    margin: auto 0px;
    left: 20px;
    z-index: 100;
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
    color: ${PRIMARY.darkBlue};
  }
`;
