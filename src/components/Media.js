import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';

import MediaItem from './MediaItem';

class Media extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        }
    };

    render() {
        const { classes, PostReducers } = this.props;
        return (
            <div className={classes.container}>
                {PostReducers.Images.map((item, index) => (
                    <MediaItem item={item} index={index} key={index} />
                ))}
            </div>
        );
    }
}
const styles = (theme) => ({
    container: {
        position: 'relative',
        display: 'flex',
        flexFlow: 'row wrap',
        width: '100%',
        // paddingTop: 30
    }
});
const mapStateToProps = state => ({
    PostReducers: state.PostReducers
});

export default connect(
    mapStateToProps
)(withStyles(styles)(Media));