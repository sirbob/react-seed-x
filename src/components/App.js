import React from 'react';
import { hot } from 'react-hot-loader';
import styles from './App.module.scss';
import { Button } from './atoms';
import Login from './containers/Login.container';

const App = () => (
  <div className={styles.App}>
    <Login />
    <Button label="Test" />
  </div>
);

export default hot(module)(App);
