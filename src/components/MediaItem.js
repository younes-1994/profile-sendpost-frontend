import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SetProp } from '../store/Post';

import { withStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import clsx from 'clsx';

class MediaItem extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        }
    };

    onClose = (row, event) => {
        // let Element = document.getElementById(row.lastModified);
        // Element.classList.add("animated");
        // Element.classList.add("fastest");
        // Element.classList.add("bounceOutOnce");

        const { PostReducers } = this.props;
        const Images = PostReducers.Images.filter(item => item.name !== row.name);
        this.props.SetProp("Images", Images);
        // setTimeout(() => { this.props.SetProp("Images", Images); }, 300);
    }

    render() {
        const { classes, item, index, PostReducers } = this.props;
        let totalLength = PostReducers.Images.length;
        return (
            <div id={item.lastModified} className={clsx(classes.item, { [classes.item_full]: totalLength % 2 !== 0 && totalLength === index + 1 })} key={index}>
                <img alt={item.name} src={item.file} />
                <IconButton onClick={(event) => this.onClose(item, event)}>
                    <CloseIcon />
                </IconButton>
            </div>
        );
    }
}
const styles = (theme) => ({
    item: {
        position: 'relative',
        width: '47.5%',
        height: 166,
        margin: '5px 1.25%',
        borderRadius: 8,
        transition: 'all 200ms ease',
        '& img': {
            width: '100%',
            height: '100%',
            borderRadius: 'inherit',
        },
        '& button': {
            position: 'absolute',
            top: '3.5%',
            right: theme.direction === 'rtl' ? 'auto' : '5%',
            left: theme.direction === 'rtl' ? '5%' : 'auto',
            opacity: '0.8',
            background: '#4A4A4A',
            color: '#fff',
            width: 30,
            height: 30,
            padding: 0,
            '&:hover': {
                background: '#4A4A4A',
            }
        }
    },
    item_full: {
        width: '97.5%',
    }
});
const mapStateToProps = state => ({
    PostReducers: state.PostReducers
});
const mapDispatchToProps = dispatch => bindActionCreators({
    SetProp
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(MediaItem));