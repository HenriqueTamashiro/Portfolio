import styled from "styled-components";

export const Content = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  display: grid;
  justify-content: center;
  color: #fff;
  overflow-y: auto;

  &.hide {
    opacity: 0;
  }

  &.show {
    opacity: 1;
    transition: opacity 0.25s ease;
  }
`;

export const Holder = styled.div`
  width: min(1500px, 92vw);
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
  align-items: stretch;
  overflow: auto;

  .sideMenu,
  .mainProject {
    background: ${({ theme }) => theme.colors.secundaryLightColor};
    border: 1px solid ${({ theme }) => theme.colors.primaryBorder};
    border-radius: 12px;
    min-height: 75vh;
  }

  .sideMenu {
    padding: 1rem;
    position: sticky;
    top: 110px;
    max-height: 75vh;
    display: flex;
    flex-direction: column;
  }

  .sideMenu h2 {
    border-bottom: 1px solid ${({ theme }) => theme.colors.primaryBorder};
    margin: 0 0 1rem;
    font-size: clamp(1.1rem, 1.6vw, 1.5rem);
    text-transform: uppercase;
    text-align: center;
  }

  .side-wrapper {
    border: 1px solid ${({ theme }) => theme.colors.primaryBorder};
    background: ${({ theme }) => theme.colors.secundaryDarkColor};
    padding: 1rem;
    overflow-y: auto;
    border-radius: 12px;
  }

  .projectContent {
    height: 25vh;
  }

  .projectList {
    display: grid;
    gap: 0.7rem;

    padding-right: 0.2rem;
  }

  .projectItem {
    all: unset;
    cursor: pointer;
    display: grid;
    gap: 0.35rem;
    padding: 0.75rem;
    border-radius: 10px;
    border: 1px solid transparent;
    background: ${({ theme }) => theme.colors.primaryDarkColor};
    transition:
      border-color 0.2s ease,
      transform 0.2s ease;
  }

  .projectItem:hover {
    border-color: ${({ theme }) => theme.colors.primaryBorder};
    transform: translateY(4px);
  }

  .projectItem.active {
    border-color: ${({ theme }) => theme.colors.primaryBorder};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primaryBorder};
  }

  .projectItem h3 {
    margin: 0;
    font-size: 0.95rem;
  }

  .projectItem p {
    margin: 0;
    font-size: 0.82rem;
    line-height: 1.35;
    opacity: 0.88;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .mainProject {
    padding: clamp(1rem, 2vw, 1.5rem);
    display: grid;
    align-content: start;
    gap: 1rem;
    overflow: auto;
  }

  .mainProject header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primaryBorder};
    padding-bottom: 0.8rem;
  }

  .mainProject h1 {
    margin: 0;
    font-size: clamp(1.4rem, 3vw, 2.2rem);
    text-transform: uppercase;
    font-weight: 700;
  }

  .mainProject header span {
    font-size: 0.9rem;
    opacity: 0.85;
    white-space: nowrap;
  }

  .tagContainer {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
  }

  .tagIcon {
    width: 34px;
    height: 34px;
    background: ${({ theme }) => theme.colors.primaryColor};
    border-radius: 8px;
    padding: 6px;
  }

  .mediaContainer {
    border: 1px solid ${({ theme }) => theme.colors.primaryBorder};
    border-radius: 10px;
    overflow: hidden;
    background: #000;
  }

  .videoContainer,
  .imageContainer {
    width: 100%;
    max-height: 55vh;
    object-fit: cover;
    display: block;
  }

  .textContainer p {
    margin: 0;
    line-height: 1.65;
    white-space: pre-line;
  }

  @media (width < 900px) {
    grid-template-columns: 1fr;

    .mainProject {
      max-height: 55vh;
    }

    .sideMenu {
      position: static;
      max-height: 50px;
    }
  }
`;
