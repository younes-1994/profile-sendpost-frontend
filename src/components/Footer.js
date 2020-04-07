import React from 'react';

import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import RestoreIcon from '@material-ui/icons/Restore';

class Footer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        }
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <div>
                    <IconButton>
                        <RestoreIcon />
                    </IconButton>
                    <IconButton>
                        <RestoreIcon />
                    </IconButton>
                    <IconButton>
                        <RestoreIcon />
                    </IconButton>
                </div>
                <div>
                    <Button variant="contained" color="primary">
                        <Typography variant="button">انتشار</Typography>
                    </Button>
                </div>
            </div>
        );
    }
}
const styles = (theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        bottom: 0,
        right: 0,
        left: 0,
        height: 57,
        backgroundColor: theme.palette.background.default,
        border: `1px solid ${theme.palette.divide2}`,
        padding: 12,
    }
});
export default withStyles(styles)(Footer);