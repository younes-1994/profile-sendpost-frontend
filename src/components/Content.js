import React from 'react';
import { withStyles } from '@material-ui/styles';

import Input from './Input';

class Content extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        }
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <Input
                    type="text"
                    name="title"
                    placeholder="عنوان مطلب"
                    textType="title"
                />
                <Input
                    type="textarea"
                    name="title"
                    placeholder="متن مورد نظر خود را تایپ کنید"
                    rows="4"
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
export default withStyles(styles)(Content);