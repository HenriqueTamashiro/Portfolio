import styled from "styled-components";

export const Content = styled.div`
  position: relative;
  overflow-x: hidden;
  display: grid;
  justify-content: center;
  color: #fff;
  padding-top: 64px;
  min-height: 100vh;

  p {
    font-size: 1rem;
    line-height: 1.7;
  }
  h1 { font-size: clamp(1.8rem, 4vw, 2.5rem); }
  h2 { font-size: clamp(1.4rem, 3vw, 2rem); }
  h3 { font-size: clamp(1rem, 2vw, 1.4rem); }
`;
