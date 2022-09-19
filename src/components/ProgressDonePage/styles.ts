import styled from "styled-components";
import BgMenu from "../../assets/img/group470.png";
import { PRIMARY } from "../../theme/palette";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 65vh;
  height: 81vh;
  margin-top: 161px;
  width: 100%;
  background-image: url(${BgMenu});
  background-repeat: no-repeat;
  background-position-y: bottom;
  background-size: contain;

  @media (max-width: 389px) {
    height: 100vh;
  }

  a {
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: center;
    position: absolute;
    bottom: 15%;
    left: 51%;
    transform: translate(-50%, -50%);
    width: 320px;

    @media (max-width: 389px) {
      bottom: -4%;
    }

    @media (max-width: 352px) {
      left: 57%;
    }

    @media (max-width: 340px) {
      left: 62%;
    }
  }

  .informacao-container {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 171px;
    width: 331px;
    border-radius: 34px;
    background: #99cef4;
    margin: 40px auto;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;

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

  .bottom-container {
    display: flex;
    width: 100%;
    height: 60%;
  }
`;
