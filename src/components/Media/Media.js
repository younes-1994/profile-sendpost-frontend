import React from 'react';
import { connect } from 'react-redux';
import MediaItem from './MediaItem';

import './Media.scss';

const Media = (props) => {
    const { PostReducers } = props;

    return (
        <div className="Media-container">
            {PostReducers.Images.map((item, index) => (
                <MediaItem item={item} index={index} key={index} />
            ))}
        </div>
    );
}

const mapStateToProps = state => ({
    PostReducers: state.PostReducers
});

export default React.memo(connect(
    mapStateToProps
)(Media));