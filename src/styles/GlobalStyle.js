import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    font-family: ${({ theme }) => theme.fonts.base};
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background: ${({ theme }) => theme.colors.background};
  }

  #root {
    max-width: 1280px;
    margin: 0 auto;
  }

  body {
    padding-top: 90px;
    min-width: 320px;
    min-height: 100vh;
    color: ${({ theme }) => theme.colors.text};
  }

  h1 {
    font-size: 3.2em;
    line-height: 1.1;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 2.2em;
    }
  }

  a {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: inherit;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }

    &:focus-visible {
      outline: none;
    }
  }

  button {
    font-family: ${({ theme }) => theme.fonts.heading};
    transition: all 0.2s ease;

    &:hover {
      border-color: #1a46bd0a;
      transform: translateY(-1px);
    }

    &:focus-visible {
      outline: none;
    }
  }

  /* Main layout */
  main {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    margin-top: 80px;
    padding: 2rem 2rem 120px 2rem;
    box-sizing: border-box;
    text-align: left;
    flex-wrap: wrap;
    gap: 2rem;
    transition: all 0.3s ease;

    @media (max-width: 900px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      padding-top: 220px;
      gap: 1rem;
    }
  }
`;

export default GlobalStyle