import styled from "styled-components";
import BgImage from "../../assets/img/Ellipse48.png";
import BgImageMesCompleto from "../../assets/img/Group393.png";

interface IProps {
  mesCompleto: boolean;
}

export const MainContainer = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  width: 100%;
  font-family: Roboto-Condensed;
  margin-top: 161px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position-y: -35%;

  .top-info-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 122px;
    background-repeat: no-repeat;
    background-size: cover;

    ${({ mesCompleto }) =>
      mesCompleto === false &&
      `    
      background-image: url(${BgImage});
      background-position-y: bottom;
  `}

    ${({ mesCompleto }) =>
      mesCompleto === true &&
      `    
      background-image: url(${BgImageMesCompleto});
      background-position-y: 60%;
      height: 333px;
      justify-content: flex-start;

  `}
  }

  .mensagem {
    display: flex;
    margin: 0 auto;
    height: 60px;
  }

  .dias-container {
    display: flex;
    justify-content: space-evenly;
    width: 85%;
    margin: 12px auto;
    height: fit-content;

    p {
      font-size: 12px;
      font-weight: 300;
      line-height: 26px;
      letter-spacing: -0.015em;
      text-align: center;
      margin: 0;
    }
  }

  .box-dia {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    width: 8.6px;
    height: 21.33px;
    border: 2px solid #ffffff;
    background: transparent;
    margin: 0.2%;
  }

  .box-dia.on {
    border: none;
    background-color: #ffac33;
  }

  .mensagem-do-dia-text {
    font-size: 22px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: -0.015em;
    text-align: center;
    color: #ffffff;
  }

  .dias-texto {
    font-size: 50px;
    font-weight: 700;
    letter-spacing: -0.015em;
    -webkit-text-fill-color: #ffac33;
    -webkit-text-stroke-color: #ffffff;
    -webkit-text-stroke-width: 2px;
    margin: 3px 11px 0px;
  }

  .mes-completo-container {
    display: flex;
    width: 100%;
    height: 200px;
  }

  .parabens-container {
    display: flex;
    flex-direction: column;
    color: #ffffff;

    h3 {
      font-size: 20px;
      font-weight: 700;
      line-height: 20px;
      letter-spacing: 0em;
      text-align: center;
      margin: 0;
    }

    p {
      margin-top: 3px;
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0em;
      text-align: center;
    }

    button {
      width: 185px;
      height: 58px;
      background: #ffac33;
      border-radius: 45.6922px;
      border: none;
      font-size: 18px;
      font-weight: 700;
      line-height: 20px;
      letter-spacing: 0em;
      text-align: center;
      color: #ffffff;
      box-shadow: 0px 3.323072671890259px 3.323072671890259px 0px #00000040;
    }
  }

  .status-registro-text {
    margin-bottom: 0;
    font-size: 22px;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: center;
    color: #7d7d7d;
  }

  .status-registro-text-sub {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: center;
    color: #7d7d7d;
  }

  .status-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 0 auto;
    justify-content: space-evenly;
    min-height: 220px;
    margin-bottom: 12px;
  }

  .status-container > div {
    width: 30%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    p {
      margin: 0;
    }

    img {
      width: 29px;
      height: 29px;
    }
  }

  .status-container > div p:nth-child(2) {
    margin-top: 5px;
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: center;
    color: #7d7d7d;
  }

  .status-container > div p:nth-child(3) {
    color: #7d7d7d;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: center;
  }

  .registrar-button {
    height: 53.99992370605469px;
    width: 262.522705078125px;
    border-radius: 45.6922492980957px;
    border: none;
    background-color: #ffac33;
    color: #ffffff;
    font-size: 30px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: center;
    box-shadow: 0px 3.323072671890259px 3.323072671890259px 0px #00000040;
    margin: 0 auto;
  }

  .ajuste-registro-text {
    font-size: 17px;
    font-weight: 700;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: center;
    color: #7d7d7d;
    text-decoration-line: underline;
    margin: 0;
  }

  .aprendizagem-do-dia-text {
    font-size: 22px;
    font-weight: 700;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
    color: #7d7d7d;
    margin-top: 30px;
    padding-left: 20px;
  }

  .aprendizagem-card {
    height: 156px;
    width: 350px;
    border-radius: 22px;
    background-color: #104f92;
    color: #ffffff;
    box-shadow: 0px 4px 4px 0px #00000040;
    margin: 0 auto;
    padding-left: 20px;
    position: relative;
  }

  .aprendizagem-card h4 {
    width: 194px;
    margin-bottom: 0;
    font-size: 22px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
  }

  .aprendizagem-card p {
    margin-top: 0;
    width: 194px;
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
  }

  .plus-icone {
    position: absolute;
    right: 11px;
    bottom: 11px;
    cursor: pointer;
  }
`;
