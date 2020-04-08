import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SetProp } from '../store/Post';

import { withStyles } from '@material-ui/styles';

import Input from './Input';

class Content extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        }
    };

    handleChange = (e) => {
        this.props.SetProp([e.target.name], e.target.value)
    }

    render() {
        const { classes, chTitle, chDescription } = this.props;
        return (
            <div className={classes.container}>
                <Input
                    type="text"
                    name="chTitle"
                    defaultValue={chTitle}
                    placeholder="عنوان مطلب"
                    textType="title"
                    // onChange={this.handleChange}
                    onBlur={this.handleChange}
                />
                <Input
                    type="textarea"
                    name="chDescription"
                    defaultValue={chDescription}
                    placeholder="متن مورد نظر خود را تایپ کنید"
                    rows="4"
                    // onChange={this.handleChange}
                    onBlur={this.handleChange}
                />
            </div>
        );
    }
}
const styles = (theme) => ({
    container: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        backgroundColor: theme.palette.background.default,
        paddingTop: 30
    },
});

const mapStateToProps = state => ({
    chTitle: state.PostReducers.chTitle,
    chDescription: state.PostReducers.chDescription,
});
const mapDispatchToProps = dispatch => bindActionCreators({
    SetProp
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Content));