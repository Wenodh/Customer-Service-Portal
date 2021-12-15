import React from 'react';
import ReactDOM from 'react-dom';
import Def from './ex1';
import * as serviceWorker from './serviceWorker';
import Product from './Product';
import Trac from './ex1.1';

ReactDOM.render(<Trac />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
