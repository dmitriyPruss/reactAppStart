import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link, 
  useRouteMatch 
} from 'react-router-dom';

import NotFound from './components/NotFound';
import UsersListHW from './components/UsersListHW';
import SignUp  from './components/SignUp';
import Calendar from './components/Calendar';
import Greeting from './components/Greeting';
import StopWatch from './components/StopWatch';

import styles from './Classes.module.css';


function App() {
  return (
    <nav className={styles.selectMenu}>
      <Router>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link className={styles.link} to={'/home'}>Home</Link>
          </li>
          <li className={styles.listItem}>
            <Link className={styles.link} to={'/calendar'}>Calendar</Link>
          </li>
          <li className={styles.listItem}>
            <Link className={styles.link} to={'/signUp'}>Sign Up</Link>
          </li>
          <li className={styles.listItem}>
            <Link className={styles.link} to={'/userslist'}>User`s list</Link>
          </li>
        </ul>
        <Switch>
          <Route path={'/home'}>
            <Home />
          </Route>
          <Route path={'/calendar'}>
            <Calendar />
          </Route>
          <Route path={'/signUp'}>
            <SignUp />
          </Route>
          <Route path={'/userslist'}>
            <UsersListHW />
          </Route>
          <Route path={`*`} component={NotFound} />
        </Switch>
      </Router>
    </nav>
  );
};


function Home() {

  const { path, url } = useRouteMatch();

  return (
    <div>
      <PageHeader />
      <nav className={styles.selectMenu}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link className={styles.link} to={`${url}/greeting`}>Greeting</Link>
          </li>
          <li className={styles.listItem}>
            <Link className={styles.link} to={`${url}/stopwatch`}>StopWatch</Link>
          </li>
        </ul>
        <Switch>
          <Route path={`${path}/greeting`}>
            <Greeting name={'Test'} />
          </Route>
          <Route path={`${path}/stopwatch`}>
            <StopWatch />
          </Route>
        </Switch>
      </nav> 
    </div>
  )
}

function PageHeader() {
  return (
    <h1 className={styles.home}>Home page</h1>
  )
}

export default App;
