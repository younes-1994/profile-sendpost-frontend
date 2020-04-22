import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SetProp } from '../../store/Post';

import Input from '../Input/Input';

import './Content.scss';

const Content = (props) => {
    const { chTitle, chDescription } = props;

    const handleChange = (e) => {
        props.SetProp([e.target.name], e.target.value)
    }

    return (
        <div className="Content-container">
            <Input
                type="text"
                name="chTitle"
                defaultValue={chTitle}
                placeholder="عنوان مطلب"
                textType="title"
                // onChange={this.handleChange}
                onBlur={handleChange}
            />
            <Input
                type="textarea"
                name="chDescription"
                defaultValue={chDescription}
                placeholder="متن مورد نظر خود را تایپ کنید"
                rows="4"
                // onChange={this.handleChange}
                onBlur={handleChange}
            />
        </div>
    );
}

const mapStateToProps = state => ({
    chTitle: state.PostReducers.chTitle,
    chDescription: state.PostReducers.chDescription,
});
const mapDispatchToProps = dispatch => bindActionCreators({
    SetProp
}, dispatch)

export default React.memo(connect(
    mapStateToProps,
    mapDispatchToProps
)(Content));