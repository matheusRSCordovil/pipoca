import styled from "styled-components";
import SearchIcon from "../../assets/icon/searchIcon.svg";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  width: 100%;
  font-family: Roboto-Condensed;
  margin-top: 161px;

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
