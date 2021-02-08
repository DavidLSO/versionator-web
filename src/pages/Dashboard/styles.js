import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }
    button {
      margin: 5px 0 0;
      height: 44px;
      background: #e76f51;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      color: #fff;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.03, "#e76f51")};
      }
    }
  }
`;

export const ContainerList = styled.div`
  margin-top: 30px;
  table,
  th,
  td {
    border: 1px solid black;
  }

  table {
    width: 100%;
    border-radius: 5px;
    background-color: #264653;

    thead {
      text-align: left;
      color: #e76f51;
      font-weight: bold;
    }
    tbody {
      text-align: left;
      color: #e76f51;
    }
    div {
      display: flex;
      justify-content: space-around;
    }
  }
`;
