import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter } from 'react-router-dom'
ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
    , document.getElementById('root')
);

serviceWorker.unregister();

// import React from 'react';
// // import ReactDOM from 'react-dom';
// import { HashRouter, Route, Switch } from "react-router-dom"
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';


// export default () => (
//     <HashRouter>
//         <Switch>
//             <Route exact path="/" component={App} />
//         </Switch>
//     </HashRouter>
// )

// serviceWorker.unregister();
