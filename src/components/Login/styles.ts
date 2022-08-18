import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #104f92;
  font-family: Roboto-Condensed;

  .arrow-next {
    display: flex;
    position: absolute;
    background-color: transparent;
    align-items: baseline;
    z-index: 2;
    top: calc(95%);
    width: 100;
    height: 30;
    cursor: pointer;
    border: none;
    right: 7px;
    font-size: 21px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
    color: #1391ed;

    p {
      margin: 0;
    }
  }
`;
