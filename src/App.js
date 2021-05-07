import React from 'react';
import InputItem from './components/InputItem/InputItem';
import ItemList from './components/ItemList/ItemList';
import Footer from './components/Footer/Footer';

let todoItem = ['Написать новое приложение','Доделать домашку','сдать реакт'];

const App = () => (<div>
  <h1>Важные дела:</h1>
  <InputItem todoItem={todoItem} />
  <ItemList doneItem={1}/>
  <Footer count={3} />
  
</div>)

export default App;
