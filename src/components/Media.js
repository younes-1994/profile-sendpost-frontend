import React from 'react';
import { withStyles } from '@material-ui/styles';

class Media extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        }
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
            </div>
        );
    }
}
const styles = (theme) => ({
    container: {
        position: 'relative',
        display: 'flex',
        // flexDirection: 'column',
        width: '100%',
        // backgroundColor: theme.palette.background.default,
        // paddingTop: 30
    },
});
export default withStyles(styles)(Media);