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
    '@keyframes mediaItem': {
        '0%': { opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)' },
        '25%': { opacity: 1, transform: 'scale3d(0.6, 0.6, 0.6)' },
        '50%': { opacity: 1, transform: 'transform: scale3d(0.9, 0.9, 0.9)' },
        '75%': { opacity: 1, transform: 'transform: scale3d(0.97, 0.97, 0.97)' },
        '100%': { opacity: 1, transform: 'transform: scale3d(1, 1, 1)', },
    },
    container: {
        position: 'relative',
        display: 'flex',
        flexFlow: 'row wrap',
        width: '100%',
        // paddingTop: 30,
        '& div': {
            opacity: 0,
            '&:nth-child(1)': mediaItemCreatorStyle(1),
            '&:nth-child(2)': mediaItemCreatorStyle(2),
            '&:nth-child(3)': mediaItemCreatorStyle(3),
            '&:nth-child(4)': mediaItemCreatorStyle(4),
            '&:nth-child(5)': mediaItemCreatorStyle(5),
            '&:nth-child(6)': mediaItemCreatorStyle(6),
            '&:nth-child(7)': mediaItemCreatorStyle(7),
        }

    }
});
const mediaItemCreatorStyle = (i) => {
    return {
        animationName: '$mediaItem',
        animationDuration: '200ms',
        animationDelay: `${(100 * i) + 100}ms`,
        animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        animationFillMode: 'forwards'
    }
}
const mapStateToProps = state => ({
    PostReducers: state.PostReducers
});

export default connect(
    mapStateToProps
)(withStyles(styles)(Media));