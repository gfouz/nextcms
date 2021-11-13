import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "../theme";

const GlobalStyle = createGlobalStyle`

   html{
     box-sizing: border-box;
     height: 100%;
     padding: 0;
}

   body{
       max-width: 1300px;
       min-height:100vh;
       padding: 0;
       margin: 0;
}

@font-face {
  font-family: 'goudy';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('goudy'),
  url(/fonts/goudy.ttf)  format('truetype');
  
}

@font-face {
  font-family: 'literata';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('literata'),
  url(/fonts/literata.ttf)  format("truetype");
  
}

@font-face {
  font-family: 'script';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('script'),
  url(/fonts/script.ttf)  format("truetype");
  
}


.row-center  {
  display: flex;
  justify-content: center;
  align-items:center;
}
.row-start {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.row-space--evenly {
  display: flex;
  justify-content:space-evenly;
  align-items: center;
}
.column-center {
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
}
.column-start {
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items: center;
}

`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
