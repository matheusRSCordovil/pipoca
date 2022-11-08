import styled from "styled-components";
import { PRIMARY } from "../../theme/palette";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  width: 100%;
  font-family: Roboto-Condensed;
  margin-top: 161px;

  .input-meu-registro-box {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    margin: 0px auto;
    width: 100%;
  }

  .input-meu-registro-box img {
    margin-left: -15px;
  }

  .input-meu-registro {
    height: 15px;
    max-width: 321px;
    width: 92%;
    border: none;
    border-bottom: 2px solid #7d7d7d;
  }

  .label-input {
    color: #7d7d7d;
    font-size: 13px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: -0.015em;
    text-align: center;
  }

  .calendar-registro {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 150px;
  }

  .ciclo {
    font-size: 16px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
    color: #7d7d7d;
    margin: 20px 0 0 20px;
  }

  .calendar-list {
    display: flex;
    overflow-x: auto;
    width: 100%;
    height: 60px;
  }

  .calendar-white-end {
    display: flex;
    width: 20px;
    min-width: 20px;
    height: 55px;
    background-color: #ffffff;
    z-index: 10;
    position: sticky;
    left: 0;
  }

  .calendar-scroll-div {
    display: flex;
    height: 55px;
    width: 1000px;
  }

  .remedio-container {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: fit-content;
    margin: 23px auto;
  }

  .remedio-container > div {
    display: flex;
  }

  .remedio-container-tr {
    width: 100%;
    height: 30px;
    color: #7d7d7d;
  }

  .remedio-container-tr > p {
    width: 17.5%;
    margin: 0;

    /* @media (max-width: 365px) {
      width: 15%;
    } */
  }

  .remedio-container-tr > div {
    display: flex;
    width: 6%;
    visibility: hidden;
  }

  .remedio-container-tr > p:nth-child(2) > input {
    color: #1391ed;
  }

  .remedio-container-tr > p:nth-child(3) > input {
    color: #ffd550;
  }

  .remedio-container-tr > p:nth-child(4) > input {
    color: #fb991c;
  }

  .remedio-container-tr > p:nth-child(5) > input {
    color: #7d7d7d;
  }

  .remedio-container-tr > p:first-child {
    display: flex;
    width: 30%;
    color: #7d7d7d;
    font-size: 12px;
    font-style: italic;
    font-weight: 300;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    justify-content: space-between;
    align-items: baseline;
  }

  .remedio-container-tr > p:first-child > img {
    height: 12px;
    width: 11px;
  }

  .remedio-container > div:first-child > p {
    color: #7d7d7d;
    font-size: 12px;
    font-weight: 700;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: center;
    width: 17.5%;
    margin: 0;
    white-space: nowrap;

    /* @media (max-width: 365px) {
      width: 15%;
    } */
  }

  .remedio-container > div:first-child > p:first-child {
    color: #7d7d7d;
    font-size: 18px;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: left;
    width: 20%;
  }

  .remedio-container > div:first-child > p:nth-child(2) {
    width: 15%;
    color: #1391ed;
  }

  .remedio-container > div:first-child > p:nth-child(3) {
    color: #1391ed;
  }

  .remedio-container > div:first-child > p:nth-child(4) {
    color: #ffd550;
  }

  .remedio-container > div:first-child > p:nth-child(5) {
    color: #fb991c;
  }

  .info-dias-container {
    display: flex;
    flex-direction: column;
    height: fit-content;
    padding-bottom: 5px;
    width: 270px;
    border-radius: 34px;
    background: #99cef4;
    margin-right: 20px;
    justify-content: center;
    position: relative;

    img {
      width: 192px;
      height: 163px;
      position: absolute;
      bottom: -110px;
      left: -125px;
    }

    h4 {
      font-size: 26px;
      font-weight: 700;
      line-height: 32px;
      letter-spacing: 0em;
      text-align: center;
      margin: 0;
    }

    p {
      font-size: 18px;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: center;
      color: ${PRIMARY.darkBlue};
      margin: 0 auto;
      width: 90%;
    }
  }

  .hoje-word {
    @media (max-width: 370px) {
      display: none;
    }
  }

  input[type="radio"] {
    appearance: none;
    background-color: #fff;
    margin: 0;
    font: inherit;
    color: currentColor;
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid currentColor;
    border-radius: 50%;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
    margin: 0 auto;
  }

  input[type="radio"]::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--form-control-color);
  }

  input[type="radio"]:checked::before {
    transform: scale(1);
    background-color: currentColor;
  }

  select {
    width: 129px;
    min-width: 15ch;
    max-width: 30ch;
    border: none;
    padding: 0.25em 0.5em;
    cursor: pointer;
    background-color: #fff;
    font-size: 16px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: 0em;
    color: #7d7d7d;
  }
`;

export const DayDiv = styled.div`
  display: flex;
  height: 52px;
  width: 52px;
  min-width: 52px;
  min-height: 52px;
  border-radius: 1.6595743894577026px;
  background-color: #f1f1f1;
  color: #7d7d7d;
  margin: 4px;
  font-size: 0.8rem;
  font-weight: bold;
  justify-content: right;
  align-items: end;

  p {
    margin: 3px;
    height: 8px;
  }
`;

export const DayDivActive = styled.div`
  display: flex;
  height: 52px;
  width: 52px;
  min-width: 52px;
  min-height: 52px;
  border-radius: 1.6595743894577026px;
  background-color: #ffac33;
  color: #ffffff;
  margin: 4px;
  font-size: 0.8rem;
  font-weight: bold;
  justify-content: right;
  align-items: end;

  p {
    margin: 3px;
    height: 8px;
  }
`;

export const TitleDiv = styled.div`
  display: flex;
  height: 40px;
  width: 100%;
  border-bottom: 3px solid #bebebe;
  border-top: 3px solid #bebebe;
  color: #7d7d7d;
  font-size: 26px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: center;
  justify-content: center;
`;

export const IconesDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 68px;
  width: 86%;
  margin: 35px auto;

  @media (max-width: 360px) {
    width: 94%;
  }

  p {
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: center;
    margin: 0;
    margin-top: -10px;
  }

  img {
    height: 86.07px;
    width: 67.5px;
  }
`;
