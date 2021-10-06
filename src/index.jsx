import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import configureStore from './redux/store';

import Dashboard from './pages/Dashboard/Dashboard';
import Details from './pages/Details/Details';
import NotFound from './pages/NotFound/NotFound';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={configureStore()}>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Redirect path="/dashboard" to="/" />
          <Route path="/detail/:gnomeId" component={Details} />
          <Route component={NotFound} />
        </Switch>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
