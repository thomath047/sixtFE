// Core
import { createGlobalStyle } from 'styled-components';

// Others
import { colors } from '@/assets/colors';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,400;8..144,500&display=swap');
    body {
        margin: 0;
        font-family: 'Roboto Flex', sans-serif;
        background-color: ${colors.themeBlack};
    }

    * {
        box-sizing: border-box;
    }
`