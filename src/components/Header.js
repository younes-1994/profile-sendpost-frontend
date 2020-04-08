import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';

import Category from './Category';

class Header extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        }
    };

    render() {
        // console.log('header rendered');
        const { classes, ProfileReducers } = this.props;
        return (
            <div className={classes.container}>
                <img className={classes.avatar} alt={ProfileReducers.chUserTitle} src={ProfileReducers.avatar} />
                <Category />
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

const mapStateToProps = state => ({
    ProfileReducers: state.ProfileReducers
});

export default connect(
    mapStateToProps
)(withStyles(styles)(Header));