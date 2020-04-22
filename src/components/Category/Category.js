import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SetProp } from '../../store/Post';

import clsx from 'clsx';
import { Button, Input } from 'antd';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import SvgIcon from '../SvgIcon/SvgIcon';
import './Category.scss';

const ExpandMoreIcon = (props) => (
    <SvgIcon color="primary" className={props.className}>
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
    </SvgIcon>
)
const AddIcon = (props) => (
    <SvgIcon color="primary" className={props.className}>
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    </SvgIcon>
)

const Category = (props) => {
    const [open, setOpen] = useState(false);
    const [openNew, setOpenNew] = useState(false);
    const { categoriesList, chSelectedCategory } = props;
    const wrapperRef = useRef(null);
    const inputRef = useRef(null);

    const handleClose = event => {
        if (wrapperRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
        setOpenNew(false);
    }

    const openHandler = () => {
        setOpen(!open);
    }

    const openHandlerNew = () => {
        setOpen(!open);
        setOpenNew(!openNew);
    }

    const onCreateClicked = () => {
        console.log(inputRef.current.input.value);
        if (inputRef.current.input.value.length > 0) {
            const { categoriesList } = props;
            categoriesList.push({ chName: inputRef.current.input.value });
            props.SetProp("categoriesList", categoriesList);
            setTimeout(() => { openHandlerNew(); }, 200);
        }
    }

    const onSelect = (e, item) => {
        props.SetProp("chSelectedCategory", item.chName);
        setTimeout(() => { openHandler(); }, 200);
    }

    return (
        <div className="Category-root" ref={wrapperRef}>
            <ClickAwayListener onClickAway={handleClose}>
                <div className={clsx("Category-container", { "Category-containerExpanded": (open || openNew) })}>
                    {!openNew &&
                        <Button type="link" block className="Category-button--bold" onClick={openHandler}>
                            {chSelectedCategory === "" ? "انتخاب دسته بندی" : chSelectedCategory}
                            <ExpandMoreIcon className={clsx("Category-rotate", { "Category-rotated_180": open })} />
                        </Button>
                    }
                    {open && categoriesList.map((item, index) => (
                        <Button type="link" block className="Category-button" key={index} onClick={(e) => onSelect(e, item)}>
                            {item.chName}
                        </Button>
                    ))}
                    {(open || openNew) &&
                        <Button type="link" block className="Category-button--bold mt-1" onClick={openHandlerNew}>
                            دسته بندی جدید
                                <AddIcon className={clsx("Category-rotate", { "Category-rotated_45": openNew })} />
                        </Button>
                    }
                    {openNew &&
                        <div className="animated faster fadeInUp mx-2 my-2">
                            <Input
                                type="text"
                                placeholder="عنوان دسته بندی"
                                name="chText"
                                ref={inputRef}
                            />
                        </div>
                    }
                    {openNew &&
                        <Button type="primary" className="Category-createButton mr-2 mb-2" onClick={onCreateClicked}>ایجاد</Button>
                    }
                </div>
            </ClickAwayListener>
        </div>
    );
}

const mapStateToProps = state => ({
    categoriesList: state.PostReducers.categoriesList,
    chSelectedCategory: state.PostReducers.chSelectedCategory,
});
const mapDispatchToProps = dispatch => bindActionCreators({
    SetProp
}, dispatch)

export default React.memo(connect(
    mapStateToProps,
    mapDispatchToProps
)(Category));