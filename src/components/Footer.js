import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SetProp } from '../store/Post';

import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import PhotoIcon from '@material-ui/icons/PhotoOutlined';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import SortIcon from '@material-ui/icons/Sort';

import Upload from './Upload';

class Footer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        }
    };

    onPublishClicked = () => {
        console.log(this.props.PostReducers)
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <div>
                    <IconButton>
                        <SortIcon />
                    </IconButton>
                    <IconButton>
                        <LocalMoviesIcon />
                    </IconButton>
                    <Upload name="Images" accept="image/*">
                        <PhotoIcon color="primary" />
                    </Upload>
                </div>
                <div>
                    <Button variant="contained" color="primary" onClick={this.onPublishClicked}>
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
        '@media(min-width:768px)': {
            width: '70%',
            margin: 'auto'
        }
    }
});
// export default withStyles(styles)(Footer);
const mapStateToProps = state => ({
    PostReducers: state.PostReducers,

});
const mapDispatchToProps = dispatch => bindActionCreators({
    SetProp
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Footer));