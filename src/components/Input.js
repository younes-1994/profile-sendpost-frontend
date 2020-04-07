import React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/styles';

class Input extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        }
    };

    render() {
        const { classes, type, rows, textType, ...rest } = this.props;
        let textarea = type === "textarea";

        return React.createElement(
            textarea ? 'textarea' : 'input',
            {
                rows: textarea ? rows : undefined,
                cols: textarea ? "100%" : undefined,
                className: clsx(classes.root, {
                    [classes.title]: textType === "title"
                }),
                style: textarea ? { lineHeight: 2 } : undefined,
                type: type,
                ...rest,
            },
            null
        );
    }
}
const styles = (theme) => ({
    root: {
        border: 'none',
        padding: '10px 5px',
        background: 'inherit',
        fontSize: 12,
        color: theme.palette.text.primary,
        '&::placeholder': {
            color: theme.palette.text.custom,
        },
        '&:focus': {
            outline: 'none'
        }
    },
    title: {
        fontFamily: 'Vazir-Bold',
        fontSize: 18
    }
});
export default withStyles(styles)(Input);