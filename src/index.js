import React from 'react';
import ReactDOM from 'react-dom';
// import Def from './ex1';
import * as serviceWorker from './serviceWorker';
// import Product from './Product';
import Trac from './ex1.1';
// import But from './ex2';
// import Appcomp from './ex2.jsx';
// import Appcompb from './ex2.1.jsx';
// import Appcompbr from './ex2.1.jsx';
import Appcomp from './ex2.3.jsx';
import Timer from './state';

ReactDOM.render(<Timer />, document.getElementById('root'));
// ReactDOM.render(<Appcompc />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
