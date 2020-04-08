import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SetProp } from '../store/Post';

import { withStyles } from '@material-ui/styles';

class Upload extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        }
    };


    upload = (event) => {
        const { name, PostReducers } = this.props;
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
                this.props.SetProp(name, list);
            }
            reader.readAsDataURL(file);

            // if (i === files.length - 1) {
            //     this.props.SetProp(name, list);
            // }
        }
    }

    render() {
        const { classes, name, accept, children } = this.props;
        return (
            <label htmlFor={name} className={classes.label}>
                {children}
                <input name={name} id={name} type="file" multiple accept={accept} onChange={this.upload} className="d-none" />
            </label>
        );
    }
}
const styles = (theme) => ({
    label: {
        marginBottom: 0,
        padding: 12,
        cursor: 'pointer',
        color: theme.palette.text.secondary
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
)(withStyles(styles)(Upload));