import React from 'react';
import InputItem from './components/InputItem/InputItem';
import ItemList from './components/ItemList/ItemList';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
 
  const items = [

    {
        value: 'Написать новое приложение'
    }, 
    { 
        value: 'выучить пропсы'
     },
    {
        value: 'Доделать домашнее задани'
    }

];
  return(
  <div className="wrap">
  <h1 className="wrap__title">Важные дела:</h1>
  <InputItem items={items} />
  <ItemList doneItem={1}/>
  <Footer count={3} />
  
</div>)
}
export default App;
