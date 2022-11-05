import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 341px;
  width: 100%;
  max-width: 390px;
  color: #7d7d7d;

  h4 {
    font-size: 22px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    margin: 0;
    margin-bottom: 35px;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  form label {
    font-size: 22px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    /* white-space: nowrap; */
  }

  form input {
    margin-bottom: 10px;
  }

  form input[type="text"] {
    margin-left: 2px;
    width: 267px;
  }

  form input[type="email"] {
    width: 267px;
  }

  form input[type="text"],
  input[type="email"] {
    height: 25px;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 300;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #7d7d7d;
  }

  input[type="password"] {
    height: 25px;
    width: 127px;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    text-align: left;
    color: #7d7d7d;
  }
`;
