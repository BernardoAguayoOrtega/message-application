//import createGlobal style
import { createGlobalStyle } from 'styled-components';

//create global style and import it
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center
  }
`;
