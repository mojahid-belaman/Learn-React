import React from "react";
import style from './App.module.css'

function App() {
    const data = [
        {
            fname: 'Mojahid',
            lname: 'BELAMAN',
            age: 25,
            address: '120 Bloc G hay dakhla'
        },
        {
            fname: 'Yassir',
            lname: 'BELAMAN',
            age: 26,
            address: '120 Bloc G hay dakhla'
        }
    ];

    const mapping = data.map((el, idx) => {
        return(
            <div key={idx}>
                <p>{el.fname}</p>
                <p>{el.lname}</p>
                <p>{el.age}</p>
                <p>{el.address}</p>
            </div>
        );
    })
    return (
        <div className={style.container}>
        <h1 style={{textAlign: 'center', color: 'red'}}>Data Boys</h1>
            <div className={style.cards}>
                {mapping}
            </div>
        </div>
    );
}

export default App;