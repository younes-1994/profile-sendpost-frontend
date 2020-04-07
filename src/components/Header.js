import React from 'react';

import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import AvatarImg from '../image/avatar.png';

class Header extends React.PureComponent {
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
                    <img className={classes.avatar} alt="نام کاربر" src={AvatarImg} />
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
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: theme.palette.background.default,
    },
    avatar: {
        width: 42,
        height: 42,
        borderRadius: 50
    }
});
export default withStyles(styles)(Header);