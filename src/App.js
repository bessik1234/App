import React from 'react';
import InputItem from './components/InputItem/InputItem';
import Footer from './components/Footer/Footer';
import Input from './components/Input/Input';
import styles from './App.module.css';
import { isDOMComponent } from 'react-dom/test-utils';


class App extends React.Component {
  state={
    items: [

      {
          value: 'Написать новое приложение',
          isDone: true
      }, 
      { 
          value: 'выучить пропсы',
          isDone: true
       },
      {
          value: 'Доделать домашнее заданиe',
          isDone: false
      }
  
  ]
  };

  render() {
       return(<div className={styles.wrap}>
    <h1 className={styles.title}> Важные дела: </h1>
    <Input />
    <InputItem items={this.state.items} />
    
    <Footer count={3} />
    
  </div>)
  }

  }



 
export default App;
