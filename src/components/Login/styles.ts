import styled from "styled-components";
import Bg1 from "../../assets/img/ellipse-19.png";
import Bg2 from "../../assets/img/group401.png";
import Bg3 from "../../assets/img/group392.png";
import Bg4 from "../../assets/img/group92.png";
import Bg5 from "../../assets/img/group412.png";
import Bg6 from "../../assets/img/group415.png";

export const MainContainer = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #104f92;
  font-family: Roboto-Condensed;

  .carousel .control-dots {
    margin-bottom: 30px;
  }

  .login-container {
    background-color: rgb(19, 145, 237);
    height: 100vh;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .login-container-6 {
    background-color: rgb(19, 145, 237);
    height: 100vh;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .login-container-5 {
    display: flex;
    background-color: rgb(19, 145, 237);
    height: 100vh;
    width: 100%;
    flex-direction: column;
  }

  .login-container-4 {
    background-color: rgb(19, 145, 237);
    height: 100vh;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .login-container-3 {
    background-color: rgb(19, 145, 237);
    height: 100vh;
    min-height: 850px;
    display: flex;
    flex-direction: column;
    width: 100%;

    span {
      font-size: 32px;
      font-weight: 700;
      line-height: 33px;
      letter-spacing: -0.015em;
    }

    p {
      text-align: left;
      font-size: 32px;
      font-weight: 400;
      line-height: 33px;
      letter-spacing: -0.015em;
      padding-left: 20px;
      margin: 0;
      bottom: 382px;
      width: 100%;
      padding-left: 40px;

      @media (min-width: 400px) {
        bottom: 400px;
      }
    }
  }

  .login-container-2 {
    background-color: rgb(19, 145, 237);
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-image: url(${Bg2});
    background-repeat: no-repeat;
    background-size: cover;

    .text-2-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: left;
      position: absolute;
      padding-left: 20px;
      color: #104f92;
      top: 100px;

      h4 {
        font-size: 41px;
        font-weight: 700;
        line-height: 35px;
        letter-spacing: 0em;
        margin: 0;
      }

      p {
        width: 90%;
        font-size: 25px;
        font-weight: 400;
        line-height: 35px;
        letter-spacing: 0em;
        margin: 0;
        margin-bottom: 24px;
      }
    }
  }

  .text-6-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    position: absolute;
    padding-left: 20px;
    top: 100px;

    p {
      width: 97%;
      font-size: 32px;
      font-weight: 700;
      line-height: 35px;
      letter-spacing: 0em;
      text-align: center;

      margin: 0;
      margin-bottom: 24px;
    }
  }

  .bottom-div-6 {
    display: flex;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 450px;
    background-image: url(${Bg6});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 100%;
  }

  .bottom-div-1 {
    display: flex;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 150px;
    background-image: url(${Bg1});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 100%;
  }

  .text-5-top {
    position: absolute;
    top: 41px;
    left: 32px;
    width: 75%;
    font-size: 32px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: -0.015em;
    text-align: left;

    span {
      font-weight: 700;
      line-height: 39px;
    }
  }

  .text-4-top {
    position: absolute;
    top: 41px;
    left: 32px;
    width: 56%;
    font-size: 32px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: -0.015em;
    text-align: left;

    span {
      font-weight: 700;
      line-height: 39px;
    }
  }

  .top-div-4 {
    display: flex;
    position: absolute;
    top: 330px;
    width: 100%;
    height: 150px;
    align-items: center;

    span {
      display: flex;
      width: 100%;
      justify-content: right;
    }

    p {
      width: 51%;
      font-size: 25px;
      font-weight: 400;
      line-height: 32px;
      letter-spacing: -0.015em;
      text-align: left;
      margin-bottom: 100px;
    }
  }

  .bottom-div-5 {
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 570px;
    background-image: url(${Bg5});
    background-repeat: no-repeat;
    background-size: cover;
    align-items: center;

    p {
      width: 45%;
      font-size: 25px;
      font-weight: 400;
      line-height: 32px;
      letter-spacing: -0.015em;
      text-align: right;
      color: #104f92;
      margin-left: 20px;
    }
  }

  .bottom-div-4 {
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 400px;
    background-image: url(${Bg4});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 100%;
    align-items: center;

    p {
      width: 45%;
      font-size: 25px;
      font-weight: 400;
      line-height: 32px;
      letter-spacing: -0.015em;
      text-align: right;
      color: #104f92;
      margin-left: 20px;
    }
  }

  .bottom-div-3 {
    display: flex;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 400px;
    background-image: url(${Bg3});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 100%;
    align-items: center;

    p {
      text-align: left;
      font-style: normal;
      font-weight: 400;
      font-size: 23px;
      line-height: 32px;
      letter-spacing: -0.015em;
      color: #104f92;
      padding-left: 20px;
      margin-top: 90px;
    }
  }

  .text-1-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 70%;
    text-align: left;

    h4 {
      font-size: 65px;
      font-weight: 700;
      line-height: 78px;
      letter-spacing: 0em;
      text-align: left;
      margin: 0;
      color: #fb991c;
      padding-left: 20px;
    }

    p {
      font-size: 32px;
      font-weight: 400;
      line-height: 38px;
      letter-spacing: 0em;
      text-align: left;
      padding-left: 20px;
    }
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

  .muted-icon {
    width: 38px;
    height: 39px;
    position: absolute;
    right: 20px;
    top: 20px;
  }

  .aada-icon {
    position: absolute;
    left: 5px;
    top: 20px;
    height: 37px;
  }
`;
