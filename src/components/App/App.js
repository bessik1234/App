import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import Todo from '../Todo/Todo';
import Contacts from '../Contacts/Contacts';

import styles from './App.module.css'; 
import About from '../About/About';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className={styles.wrap}>
          <Card className={styles.sidebar} >
            <MenuList>
              <Link className={styles.link} to='/'><MenuItem>Профиль</MenuItem></Link>
              <Link className={styles.link} to='/todo'><MenuItem>Список задач</MenuItem></Link>
              <Link className={styles.link} to='/contacts'><MenuItem>Контакты</MenuItem></Link>
            </MenuList>
          </Card>

          <Card>
            <Route path='/' exact component={About} />
            <Route path='/todo' component={Todo} />
            <Route path='/contacts' component={Contacts} />
          </Card>
        </div>
    
      </Router>
    );
  }
}

export default App;