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
                    isDone: true
                },
                {
                    value: 'Отправить домашку',
                    isDone: false
                },
                {
                    value: 'Прибраться в папках',
                    isDone: true
                }]
        };

    onClickDone = (isDone) => console.log(isDone);


    render() {
        document.body.style.margin = '0';

        return (
            <div className={styles.wrap}>
                <div className={styles.main}>
                    <h1 className={styles.title}>Наш список дел:</h1>
                    <InputItem/>
                    <ItemList items={this.state.items} onClickDone={this.onClickDone} />
                    <Footer taskCount={6} />
                </div>
            </div>);
    }
}


export default App;