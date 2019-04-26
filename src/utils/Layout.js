import React from "react"
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&subset=latin-ext');
    font-family: 'Roboto', sans-serif;
    width: 100%;
  }

  *, *::before, *::after{
    box-sizing: border-box;
  }
`;

  const StyledWrapper = styled.div`
    width: 100%;
  `;

const Layout = ({children}) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle/>
      <StyledWrapper>
        {children}
      </StyledWrapper>
    </>
  </ThemeProvider>
);

export default Layout;
