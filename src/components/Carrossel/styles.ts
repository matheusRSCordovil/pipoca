import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  height: 120px;
  width: 100%;
  font-family: Roboto-Condensed;
  margin-bottom: 20px;

  .block {
    height: 116px;
    width: 164px;
    border-radius: 22px;
    background: #c4c4c4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 0 10px;
  }

  .block > h4 {
    font-size: 22px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: center;
  }

  .plus-block {
    height: 116px;
    width: 164px;
    border-radius: 22px;
    background: #c4c4c4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .block.forward {
    margin: 0 10px !important;
  }

  .block.backward {
    margin: 0 10px !important;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 100%;
  background-color: #683bb7;
  color: #fff;
  margin: 15px;
  font-size: 4em;
`;
