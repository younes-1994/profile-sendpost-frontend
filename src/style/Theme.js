export const LightTheme = {
    direction: 'rtl', // Both here and <body dir="rtl">
    typography: {
        fontFamily: [
            'Vazir',
        ].join(','),
        fontSize: 12
    },
    palette: {
        primary: {
            main: '#3E92E6',
        },
        divide2: '#EBEBEB',
        background: {
            paper: "#F4F4F4",
            default: "#fff"
        },
        text: {
            custom: '#BEBEBE'
        }
    },
    overrides: {
        // Style sheet name ⚛️
        MuiButton: {
            // Name of the rule
            root: {
                // Some CSS
                outline: 'none !important',
                height: 33,
                borderRadius: 8
            },
        },
    },
}