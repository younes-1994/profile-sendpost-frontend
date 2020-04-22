import React from 'react';
import clsx from 'clsx';

import './Input.scss';

const Input = (props) => {
    const { type, rows, textType, ...rest } = props;
    let textarea = type === "textarea";

    return React.createElement(
        textarea ? 'textarea' : 'input',
        {
            rows: textarea ? rows : undefined,
            cols: textarea ? "100%" : undefined,
            className: clsx("Input-root", {
                "Input-title": textType === "title"
            }),
            style: textarea ? { lineHeight: 2 } : undefined,
            type: type,
            ...rest,
        },
        null
    );
}

export default React.memo(Input);