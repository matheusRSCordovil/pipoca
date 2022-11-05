import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  height: 161px;
  width: 100%;
  /* min-width: 390px; */
  background-color: #ffffff;
  font-family: Roboto-Condensed;
  position: absolute;
  top: 0;
  box-shadow: 0px 4px 4px 0px #00000026;

  .notificationOnIcon {
    width: 31px;
    height: 36px;
    position: absolute;
    left: 24px;
    top: 35px;
    cursor: pointer;
  }

  .logoAada {
    width: 67px;
    height: 23px;
    position: absolute;
    right: 14px;
    top: 134px;
    cursor: pointer;
  }

  .menu {
    width: 36px;
    height: 18px;
    position: absolute;
    right: 24px;
    top: 43px;
    cursor: pointer;
  }

  p {
    font-size: 35px;
    font-weight: 700;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
    color: #7d7d7d;
    margin: 0;
    position: absolute;
    left: 24px;
    top: 105px;
  }
`;
