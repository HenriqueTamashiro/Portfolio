import styled from "styled-components";

export const WindowLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;

  align-items: center;
  justify-items: center;
  width: 100%;

  input {
    background: ${({ theme }) => theme.colors.inputBackground};
    border: 1px solid ${({ theme }) => theme.colors.primaryBorder};
    border-radius: 6px;
    width: 100%;
    height: 100%;
    padding: 5px;
  }

  form {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    width: 100%;

    margin-top: 25px;
  }

  label {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
  }

  button {
    width: 8rem;
    height: 4rem;
    justify-self: end;
    margin-top: 45px;
    border-top-left-radius: 6px;
    border-bottom-right-radius: 6px;
    font-weight: 550;
    background: ${({ theme }) => theme.colors.menuLightColor};
  }

  button:hover {
    background: ${({ theme }) => theme.colors.menuLightColorOpt};
    transition: 400ms;
    cursor: pointer;
  }

  .text-label {
    padding: 5px 0 5px 0;
    text-transform: uppercase;
    font-weight: bold;
    text-decoration: none;
    pointer-events: none;
  }

  .input-message {
    background: ${({ theme }) => theme.colors.inputBackground};
    border: 1px solid ${({ theme }) => theme.colors.primaryBorder};
    border-radius: 6px;
    width: 100%;
    height: 30vh;
    padding: 5px;
    resize: none;
    overflow-y: scroll;
  }

  .form-wrapper {
    width: 80%;
    justify-self: center;
  }
`;
