import { ThemeProvider } from "styled-components";
import React from "react";
import Colors from './colors/colors';


export function useThemeColor(theme: 'light' | 'dark') {
    return Colors[theme];
}

const Theme = ({ theme, children }: any) => (
    <ThemeProvider theme={useThemeColor(theme)}>{children}</ThemeProvider>
);

export default Theme;