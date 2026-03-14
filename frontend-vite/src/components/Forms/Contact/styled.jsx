import styled from "styled-components";

export const WindowLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  width: 100%;
  padding: 1.5rem;
  color: ${({ theme }) => theme.colors.textColor};

  input {
    background: ${({ theme }) => theme.colors.inputBackground};
    border: 1px solid ${({ theme }) => theme.colors.primaryBorder};
    border-radius: 8px;
    width: 100%;
    padding: 10px 14px;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textColor};
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
    font-family: inherit;
  }

  input:focus {
    border-color: ${({ theme }) => theme.colors.primaryGlow};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primaryGlow}22;
    outline: none;
  }

  input::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  button {
    align-self: flex-end;
    padding: 10px 28px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.9rem;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.menuLightColor}, #1a4a8a);
    color: #fff;
    border: 1px solid ${({ theme }) => theme.colors.borderAccent};
    cursor: pointer;
    transition: all 0.25s ease;
    margin-top: 0.5rem;
  }

  button:hover {
    background: linear-gradient(135deg, #1a4a8a, ${({ theme }) => theme.colors.primaryGlow});
    box-shadow: 0 0 20px ${({ theme }) => theme.colors.boxShadowLightColor};
    transform: translateY(-1px);
  }

  .text-label {
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: ${({ theme }) => theme.colors.textMuted};
    pointer-events: none;
  }

  .input-message {
    background: ${({ theme }) => theme.colors.inputBackground};
    border: 1px solid ${({ theme }) => theme.colors.primaryBorder};
    border-radius: 8px;
    width: 100%;
    height: 140px;
    padding: 10px 14px;
    resize: none;
    overflow-y: auto;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textColor};
    font-family: inherit;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .input-message:focus {
    border-color: ${({ theme }) => theme.colors.primaryGlow};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primaryGlow}22;
    outline: none;
  }

  .input-message::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }

  .form-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
