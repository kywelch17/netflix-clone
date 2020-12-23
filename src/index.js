import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Styles } from './global';
import 'normalize.css';

ReactDOM.render(<>
    <Styles />
    <App />
    </>, 
    document.getElementById('root')
);
