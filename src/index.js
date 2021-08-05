import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reducers from "./reducers";
import Welcome from './components/Welcome';
import Main from './components/Main';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path='/' exact component={Welcome} />
      <Route path='/match/:page' component={Main} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
