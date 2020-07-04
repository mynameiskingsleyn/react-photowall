import React from 'react';
import ReactDom from 'react-dom';
//import Main from './Components/Main';
import './styles/stylesheet.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {createStore} from 'redux';
import  rootReducer from './redux/reducer';
import {Provider} from 'react-redux';
import App from './Components/App';

//import {createBrowserHistory} from 'history';

//
// const element = React.createElement('ol',null,
//     tasks.map((task,index)=> React.createElement('li',{key:index},task))
// );
//
// ReactDom.render(element, document.getElementById('root'));

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDom.render(<Provider store={store}><Router><App/></Router></Provider>, document.getElementById('root'));