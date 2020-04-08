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
            setTimeout(() => { this.openHandlerNew(); }, 200)
        }
    }

    onSelect = (e, item) => {
        this.props.SetProp("chSelectedCategory", item.chName);
        setTimeout(() => { this.openHandler(); }, 200)
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
                            <ButtonBase className={clsx(classes.button, "")} key={index} onClick={(e) => this.onSelect(e, item)}>
                                <Typography variant="button">{item.chName}</Typography>
                            </ButtonBase>
                        ))}
                        {(open || openNew) &&
                            <ButtonBase className={clsx(classes.button, "mt-1")} onClick={this.openHandlerNew}>
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
                            <Button variant="contained" color="primary" className={clsx(classes.createButton, "mr-2 mb-2")} onClick={this.onCreateClicked} >
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
    '@keyframes menu': {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 }
    },
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
        height: 'fit-content',
        '& button': {
            opacity: 0,
            '&:nth-child(1)': { opacity: 1 },
            '&:nth-child(2)': menuCreatorStyle(2),
            '&:nth-child(3)': menuCreatorStyle(3),
            '&:nth-child(4)': menuCreatorStyle(4),
            '&:nth-child(5)': menuCreatorStyle(5),
            '&:nth-child(6)': menuCreatorStyle(6),
            '&:nth-child(7)': menuCreatorStyle(7),
        }
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

const menuCreatorStyle = (i) => {
    return {
        animationName: '$menu',
        animationDuration: '200ms',
        animationDelay: `${(100 * i) + 100}ms`,
        animationTimingFunction: 'ease-in-out',
        animationFillMode: 'forwards'
    }

}

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