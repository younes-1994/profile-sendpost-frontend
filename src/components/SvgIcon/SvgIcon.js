import React from 'react';
import clsx from 'clsx';
import './SvgIcon.scss';

const SvgIcon = (props) => (
    <svg
        className={clsx("SvgIcon-root", props.className, {
            "SvgIcon-color--primary": props.color === "primary"
        })}
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
        style={props.style}
    >
        {props.children}
    </svg>
);
export default React.memo(SvgIcon);