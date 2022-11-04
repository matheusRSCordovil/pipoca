import styled from "styled-components";
import BgDepoimentos from "../../assets/img/bgDepoimentos.png";
import SearchIcon from "../../assets/icon/searchIcon.svg";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  width: 100%;
  margin-top: 161px;
  font-family: Roboto-Condensed;

  .depoimento-head {
    display: flex;
    width: 95%;
    max-width: 100vw;
    height: 40px;
    margin-bottom: 5px;
    margin-top: 20px;
    justify-content: space-between;
  }

  .depoimento-body {
    display: flex;
    width: 90%;
    max-width: 100vw;
    margin: 0 auto;
    height: fit-content;
    margin-bottom: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  h4 {
    font-size: 22px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #7d7d7d;
    padding-left: 20px;
    margin: 0;
  }

  .resumo {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    text-align: justify;
    color: #7d7d7d;
    margin-top: 0;
    padding: 0 20px;
  }

  .box-depoimento {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 116px;
    width: 164px;
    border-radius: 22px;
    box-shadow: 0px 4px 4px 0px #00000040;
    background-color: #99cef4;
    text-align: center;
    margin: 10px 0px;

    h5 {
      font-size: 22px;
      font-weight: 700;
      line-height: 25px;
      letter-spacing: 0em;
      margin: 0;
    }

    p {
      font-size: 11px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0em;
      margin: 0;
    }
  }

  .img-box-header {
    display: flex;
    height: 174px;
    width: 100%;
    background-image: url(${BgDepoimentos});
    margin-bottom: 20px;
  }

  .subtitle {
    font-size: 12px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
    color: #7d7d7d;
    margin: 0;
    padding-left: 20px;
  }

  .texto-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: fit-content;
    width: 90%;
    max-width: 100vw;
    margin: 0 auto;
    text-align: justify;
  }

  .texto-box p {
    text-indent: 12px;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    color: #7d7d7d;
  }

  /* .texto-box span {
    font-size: 20px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: justified;
  } */

  .pesquisa-input {
    width: 354px;
    height: 50px;
    margin: 35px auto;
    border: none;
    border-radius: 20.5px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 4px 2px;
    z-index: 100;
    background: url(${SearchIcon}) no-repeat;
    background-position-x: 95%;
    background-position-y: center;
  }

  .recommend-text {
    font-size: 18px;
    font-weight: 700;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
    color: #7d7d7d;
    padding-left: 20px;
    margin: 0;
  }

  hr {
    border: none;
    border-top: 2px dotted #7d7d7d;
    color: #fff;
    background-color: #fff;
    height: 1.2px;
    width: 20%;
    margin: auto;
    margin-top: 20px;
  }
`;
