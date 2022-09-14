import styled from "styled-components";

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
`;
