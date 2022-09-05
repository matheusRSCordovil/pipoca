import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  width: 100%;
  font-family: Roboto-Condensed;
  margin-top: 161px;

  .input-meu-registro {
    height: 0px;
    width: 321px;
    border: none;
    border-bottom: 2px solid #7d7d7d;
    margin: 0px auto;
    margin-bottom: 25px;
  }

  .label-input {
    color: #7d7d7d;
    font-size: 13px;
    font-weight: 700;
    line-height: 35px;
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

export const TitleDiv = styled.div`
  display: flex;
  height: 40px;
  width: 100%;
  border: 3px solid #bebebe;
  color: #7d7d7d;
  font-size: 26px;
  font-weight: 700;
  line-height: 35px;
  letter-spacing: 0em;
  text-align: center;
  justify-content: center;
`;

export const IconesDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 68px;
  width: 95%;
  margin: 35px auto;

  p {
    font-size: 12px;
    font-weight: 700;
    line-height: 27px;
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
