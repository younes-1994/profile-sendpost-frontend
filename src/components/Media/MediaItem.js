import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SetProp } from '../../store/Post';

import { Button } from 'antd';
import clsx from 'clsx';

import SvgIcon from '../SvgIcon/SvgIcon';

import './MediaItem.scss';

const CloseIcon = React.memo(() => (<SvgIcon><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></SvgIcon>));

const MediaItem = (props) => {
    const { item, index, PostReducers } = props;
    let totalLength = PostReducers.Images.length;

    const onClose = (row, event) => {
        // let Element = document.getElementById(row.lastModified);
        // Element.classList.add("animated");
        // Element.classList.add("fastest");
        // Element.classList.add("bounceOutOnce");

        const { PostReducers } = props;
        const Images = PostReducers.Images.filter(item => item.name !== row.name);
        props.SetProp("Images", Images);
        // setTimeout(() => { this.props.SetProp("Images", Images); }, 300);
    }
    return (
        <div id={item.lastModified} className={clsx("MediaItem-item", { "MediaItem-item_full": totalLength % 2 !== 0 && totalLength === index + 1 })} key={index}>
            <img alt={item.name} src={item.file} />
            <Button
                type="link"
                icon={<CloseIcon />}
                onClick={(event) => onClose(item, event)}
            />
        </div>
    );
}

const mapStateToProps = state => ({
    PostReducers: state.PostReducers
});
const mapDispatchToProps = dispatch => bindActionCreators({
    SetProp
}, dispatch)

export default React.memo(connect(
    mapStateToProps,
    mapDispatchToProps
)(MediaItem));