import React from 'react';
import { connect } from 'react-redux';
import Category from '../Category/Category';
import './Header.scss';

const Header = (props) => {
    const { ProfileReducers } = props;

    return (
        <div className="Header-container">
            <img className="Header-avatar" alt={ProfileReducers.chUserTitle} src={ProfileReducers.avatar} />
            <Category />
        </div>
    );
}

const mapStateToProps = state => ({
    ProfileReducers: state.ProfileReducers
});

export default React.memo(connect(
    mapStateToProps
)(Header));