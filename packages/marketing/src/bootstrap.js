import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount function on app start
const mount = (el) => {
    ReactDOM.render(<App />, el);
};

// If we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_feed-dev-root');

    if (devRoot) mount(devRoot);
}

// If we are in a container, export mount
export { mount };
