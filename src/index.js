import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
/*import $ from 'jquery';*/
/*import Popper from 'popper.js';*/
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
/*import { BrowserRouter } from 'react-router-dom'*/


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
