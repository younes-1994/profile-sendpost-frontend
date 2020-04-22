import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SetProp } from '../../store/Post';

import { Button } from 'antd';

import SvgIcon from '../SvgIcon/SvgIcon';
import Upload from '../Upload/Upload';

import './Footer.scss';


const SortIcon = React.memo(() => (
    <SvgIcon>
        <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" />
    </SvgIcon>
));
const MoviesIcon = React.memo(() => (
    <SvgIcon>
        <path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z" />
    </SvgIcon>
));
const PhotoIcon = React.memo((props) => (
    <SvgIcon {...props}>
        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z" />
    </SvgIcon>
));

const Footer = (props) => {
    
    const onPublishClicked = () => {
        // let Post = JSON.stringify({
        //     Post: this.props.PostReducers
        // })
        let Post = { Post: props.PostReducers }
        console.log(Post);
    }

    return (
        <div className="Footer-container">
            <div>
                <Button
                    type="link"
                    style={{ color: "#DBDBDB" }}
                    icon={<SortIcon />}
                />
                <Button
                    type="link"
                    style={{ color: "#DBDBDB" }}
                    icon={<MoviesIcon />}
                />
                <Upload name="Images" accept="image/*">
                    <PhotoIcon style={{ color: "#3e92e6" }} />
                </Upload>
            </div>
            <div>
                <Button type="primary" onClick={onPublishClicked}>
                    انتشار
                </Button>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    PostReducers: state.PostReducers,
});
const mapDispatchToProps = dispatch => bindActionCreators({
    SetProp
}, dispatch)

export default React.memo(connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer));