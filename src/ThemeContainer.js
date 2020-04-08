import React from 'react';
import App from './App';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { createMuiTheme } from '@material-ui/core/styles';
import { StylesProvider, jssPreset, ThemeProvider } from '@material-ui/styles';
import { LightTheme } from './style/Theme';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

class ThemeContainer extends React.PureComponent {
    render() {
        return (
            <StylesProvider jss={jss}>
                <ThemeProvider theme={createMuiTheme(LightTheme)}>
                    <App />
                </ThemeProvider>
            </StylesProvider>
        );
    }
}
export default ThemeContainer;