export const LightTheme = {
    direction: 'rtl', // Both here and <body dir="rtl">
    typography: {
        fontFamily: [
            'IRANSans',
        ].join(','),
    },
    palette: {
        primary: { main: '#2e3743', },
        success: {
            light: "#52c7b8",
            main: "#009688",
            dark: "#00675b",
            contrastText: "#fff",
        },
        prim: {
            main: "#fecb04",
        },
        background: {
            main: "#2e3743",
            text: '#fff',
            text2: '#fecb04',

            paper: "#fff",
            default: "#fff"
        }
    },
    overrides: {
        // Style sheet name ⚛️
        MuiButton: {
            // Name of the rule
            root: {
                // Some CSS
                outline: 'none !important',
            },
        },
    },
}