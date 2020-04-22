import React from 'react';
import App from './App';
import { ConfigProvider } from 'antd';

const direction = 'ltr';

const ThemeContainer = () => {
    return (
        <ConfigProvider direction={direction}>
            <App />
        </ConfigProvider>
    );
}
export default ThemeContainer;