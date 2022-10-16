import styled from "styled-components";
import Bg7 from "../../assets/img/group922.png";
import { PRIMARY } from "../../theme/palette";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: ${PRIMARY.darkBlue};
  font-family: Roboto-Condensed;

  @media (max-width: 389px) {
    min-height: 125vh;
  }

  .error-msg {
    color: #ff0000;
    height: 20px;
  }

  .login-container-7 {
    background-color: rgb(19, 145, 237);
    height: 100vh;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .login-container-7 label {
    font-size: 25px;
    font-weight: 400;
    letter-spacing: -0.015em;
    text-align: left;
    color: #104f92;
    padding-left: 20px;
  }

  .text-login-7 {
    position: absolute;
    font-size: 32px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: -0.015em;
    text-align: left;
    padding: 0 20px;
    top: 70px;
  }

  .text-login-8 {
    position: absolute;
    font-size: 45px;
    font-weight: 400;
    line-height: 54px;
    letter-spacing: 0em;
    text-align: left;
    padding-left: 30px;
    top: 50px;
  }

  .text-sub-login-8 {
    position: absolute;
    font-size: 30px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
    padding-left: 30px;
    top: 190px;
  }

  .text-login-7 span {
    font-weight: 700;
  }

  .bottom-div-7 {
    display: flex;
    position: absolute;
    flex-direction: column;
    bottom: 0;
    width: 100%;
    height: 580px;
    background-image: url(${Bg7});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 50%;
  }

  .bottom-div-7 > form {
    display: flex;
    flex-direction: column;
    margin-top: 60px;
  }

  .bottom-div-7 p:nth-child(2) {
    font-size: 25px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: -0.015em;
    text-align: center;
    margin: 0%;
    margin-top: 30px;
    color: #104f92;
    cursor: pointer;
  }

  .bottom-div-7 p:nth-child(3) {
    font-size: 20px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: -0.015em;
    text-align: center;
    margin: 0%;
    color: #104f92;
    text-decoration: underline;
    cursor: pointer;
  }

  .bottom-div-7 form > input {
    width: 354px;
    height: 50px;
    margin: 10px auto;
    border: none;
    border-radius: 20.5px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px 0px;
    z-index: 100;
  }

  .arrow-next {
    display: flex;
    position: absolute;
    background-color: transparent;
    align-items: baseline;
    z-index: 2;
    top: calc(92.8%);
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

    img {
      margin-left: 4px;
    }

    p {
      margin: 0;
    }
  }

  .aada-icon-login {
    position: absolute;
    left: 5px;
    top: 20px;
    height: 37px;
  }

  .no-login-text {
    font-size: 25px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: -0.015em;
    text-align: center;
  }
`;
