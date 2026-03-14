import styled from "styled-components";

export const WindowLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  width: 100%;
  padding: clamp(1rem, 3vw, 2rem);
  color: ${({ theme }) => theme.colors.textColor};

  input {
    background: ${({ theme }) => theme.colors.inputBackground};
    border: 1px solid ${({ theme }) => theme.colors.primaryBorder};
    border-radius: 8px;
    width: 100%;
    padding: clamp(8px, 1.5vw, 14px) clamp(10px, 2vw, 16px);
    font-size: clamp(0.85rem, 1.2vw, 1rem);
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
    gap: clamp(0.8rem, 2vw, 1.2rem);
    width: 100%;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  button {
    align-self: flex-end;
    padding: clamp(10px, 1.5vw, 14px) clamp(20px, 3vw, 32px);
    border-radius: 8px;
    font-weight: 600;
    font-size: clamp(0.85rem, 1.2vw, 1rem);
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
    transform: translateY(-2px);
  }

  button:active {
    transform: translateY(0);
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
    height: clamp(120px, 25vh, 180px);
    padding: clamp(8px, 1.5vw, 14px) clamp(10px, 2vw, 16px);
    resize: vertical;
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
    gap: clamp(0.8rem, 2vw, 1.2rem);
  }

  @media (max-width: 768px) {
    padding: clamp(0.8rem, 2vw, 1.5rem);

    button {
      align-self: center;
      width: 100%;
      max-width: 200px;
    }
  }

  @media (max-width: 480px) {
    padding: 1rem 0.8rem;

    form {
      gap: 1rem;
    }

    button {
      width: 100%;
      padding: 12px 16px;
      font-size: 0.9rem;
    }
  }
`;
