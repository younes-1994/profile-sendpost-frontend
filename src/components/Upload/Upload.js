import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SetProp } from '../../store/Post';

import './Upload.scss';

const Upload = (props) => {
    const { name, accept, children } = props;

    const upload = (event) => {
        const { name, PostReducers } = props;
        let list = PostReducers[name];
        let files = event.target.files;
        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            let reader = new FileReader();
            reader.onloadend = () => {
                list.push({
                    file: reader.result,
                    name: file.name,
                    size: file.size,
                    type: file.type,
                    lastModified: file.lastModified,
                    lastModifiedDate: file.lastModifiedDate
                });
                props.SetProp(name, list);
            }
            reader.readAsDataURL(file);

            // if (i === files.length - 1) {
            //     this.props.SetProp(name, list);
            // }
        }
    }

    return (
        <label htmlFor={name} className="Upload-label">
            {children}
            <input name={name} id={name} type="file" multiple accept={accept} onChange={upload} className="d-none" />
        </label>
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
)(Upload));