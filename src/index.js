import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const obj = {
    name: 'Fabio',
    lastName: 'Palhano',
    address: {
        city: 'Ponta Grossa'
    }
}
const keys = Object.keys(obj)

const foreach = keys.forEach(item=>{
    return obj[item]
})

console.log('foreach',foreach)

const map = keys.map(item =>{
    return obj[item]
})

console.log('map',map)

const { name } = obj

console.log(name)

const getName = person => {
    return person.name
}

console.log('>>',getName(obj))

const [i1, i2] = keys
console.log('keys', keys)
console.log(i1, i2)
