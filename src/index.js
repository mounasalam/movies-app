import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header';
import Footer from './components/footer';
import Highlights from './components/highlights';
import App from './App';
import * as serviceWorker from './serviceWorker';


import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import Featured from './components/featured';
//import ReactBootstrap, {Jumbotron, Button, Col, Grid, Panel, FormGroup} from 'react-bootstrap'

// import serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    {/* <Header />
    <Highlights />
    <Featured />
    <Footer /> */}
     <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
