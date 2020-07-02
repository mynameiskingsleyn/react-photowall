import React from 'react';
import ReactDom from 'react-dom';
import Main from './Components/Main';
import './styles/stylesheet.css';

//
// const element = React.createElement('ol',null,
//     tasks.map((task,index)=> React.createElement('li',{key:index},task))
// );
//
// ReactDom.render(element, document.getElementById('root'));


ReactDom.render(<Main/>, document.getElementById('root'));