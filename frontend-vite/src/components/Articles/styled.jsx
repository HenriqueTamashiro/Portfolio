import styled from "styled-components";


export const Articles = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  flex-grow: 1;
  border-radius: 20px;
  background:  ${({ theme }) => theme.colors.primaryDarkColor};
`;
