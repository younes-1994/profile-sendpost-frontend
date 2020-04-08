import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SetProp } from '../store/Post';

import clsx from 'clsx';
import { withStyles } from '@material-ui/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';

class Category extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            openNew: false,
            chText: ''
        }
    };

    handleClose = event => {
        if (this.wrapperRef.contains(event.target)) {
            return;
        }
        this.setState({ open: false, openNew: false });
    };

    openHandler = () => {
        this.setState(state => { return { open: !state.open } });
    }

    openHandlerNew = () => {
        this.setState(state => { return { open: !state.open, openNew: !state.openNew } });
    }

    onCreateClicked = () => {
        if (this.inputRef.value.length > 0) {
            const { categoriesList } = this.props;
            categoriesList.push({ chName: this.inputRef.value });
            this.props.SetProp("categoriesList", categoriesList);
            this.openHandlerNew();
        }
    }

    onSelect = (e, item) => {
        this.props.SetProp("chSelectedCategory", item.chName);
        this.openHandler();
    }

    render() {
        const { open, openNew } = this.state;
        const { classes, categoriesList, chSelectedCategory } = this.props;
        return (
            <div className={classes.root} ref={node => this.wrapperRef = node}>
                <ClickAwayListener onClickAway={this.handleClose}>
                    <div className={clsx(classes.container, { [classes.containerExpanded]: (open || openNew) })}>
                        {!openNew &&
                            <ButtonBase className={classes.button} onClick={this.openHandler}>
                                <Typography variant="button">{chSelectedCategory === "" ? "انتخاب دسته بندی" : chSelectedCategory}</Typography>
                                <ExpandMoreIcon color="primary" className={clsx(classes.rotate, { [classes.rotated_180]: open })} />
                            </ButtonBase>
                        }
                        {open && categoriesList.map((item, index) => (
                            <ButtonBase className={clsx(classes.button, "animated fadeInDown")} key={index} onClick={(e) => this.onSelect(e, item)}>
                                <Typography variant="button">{item.chName}</Typography>
                            </ButtonBase>
                        ))}
                        {(open || openNew) &&
                            <ButtonBase className={clsx(classes.button, "mt-1 animated fadeInDown")} onClick={this.openHandlerNew}>
                                <Typography variant="button">دسته بندی جدید</Typography>
                                <AddIcon color="primary" className={clsx(classes.rotate, { [classes.rotated_45]: openNew })} />
                            </ButtonBase>
                        }
                        {openNew &&
                            <div className="animated faster fadeInUp mx-2 my-2">
                                <TextField
                                    variant="outlined"
                                    label="عنوان دسته بندی"
                                    margin="dense"
                                    name="chText"
                                    inputRef={ref => this.inputRef = ref}
                                />
                            </div>
                        }
                        {openNew &&
                            <Button variant="contained" color="primary" className={clsx(classes.createButton, "animated fadeInUp mr-2 mb-2")} onClick={this.onCreateClicked} >
                                <Typography variant="button">ایجاد</Typography>
                            </Button>
                        }
                    </div>
                </ClickAwayListener>
            </div>
        );
    }
}
const styles = (theme) => ({
    root: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 146,
    },
    container: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: 15.5,
        width: '100%',
        height: 31,
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 200ms ease',
        zIndex: 1
    },
    containerExpanded: {
        height: 'fit-content'
    },
    button: {
        width: '100%',
        height: 31,
        borderRadius: 15.5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0px 15px'
    },
    rotate: {
        transition: 'all 200ms ease',
    },
    rotated_180: {
        transform: 'rotate(180deg)',
    },
    rotated_45: {
        transform: 'rotate(45deg)',
    },
    createButton: {
        width: 65,
        height: 24,
        borderRadius: 4,
        padding: 0
    }
});

const mapStateToProps = state => ({
    categoriesList: state.PostReducers.categoriesList,
    chSelectedCategory: state.PostReducers.chSelectedCategory,
});
const mapDispatchToProps = dispatch => bindActionCreators({
    SetProp
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Category));