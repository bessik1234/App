import React from "react";
import styles from './App.module.css';
import InputItem from "./Components/InputItem/InputItem";
import ItemList from "./Components/ItemList/ItemList";
import Footer from "./Components/Footer/Footer"; 

class App extends React.Component {
    state = {
            items: [
                {
                    value: 'Доделать домашку',
                    isDone: true,
                    id: 1,
                },
                {
                    value: 'Отправить домашку',
                    isDone: false,
                    id: 2,
                },
                {
                    value: 'Прибраться в папках',
                    isDone: true,
                    id: 3,
                }],
            count : 6
        };

    onClickDone = id => {
        const newItemList = this.state.items.map(item => {
            const newItem = { ...item };
            if (item.id === id) {
                newItem.isDone =  !item.isDone;
            }
            return newItem;
        });
        this.setState({items: newItemList});
    };
        
    onClickDelete = id => {
        const newItemList = this.state.items.filter( item => {      
    
          return item.id !==id;
        });
    
        this.setState({ items: newItemList });
      };
    


    render() {
        document.body.style.margin = '0';

        return (
            <div className={styles.wrap}>
                <div className={styles.main}>
                    <h1 className={styles.title}>Наш список дел:</h1>
                    <InputItem/>
                    <ItemList items={this.state.items} 
                    onClickDone={this.onClickDone} 
                    onClickDelete={this.onClickDelete}  />
                    <Footer count={this.state.count} />
                </div>
            </div>);
    }
}


export default App;