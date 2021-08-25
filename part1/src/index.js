import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Comment from './Comment';
import reportWebVitals from './reportWebVitals';
import Clock from './Clock';
import Toggle from './Toggle';
import Greeting from './Greeting';
import LoginControl from './LoginControl';
import MappingPractice from './MappingPractice'
import NameForm from './NameForm'
import SideCounter from './SideCounter'
import EventHandlerPractice from './EventHandlerPractice'
/* part 1A: props and components
const myAuthorInfo =  {
    userInfo : {
      userName : "Jacob",
      avatarUrl : "http://www.w3.org/2000/svg"
    }
};

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Comment authorInfo={myAuthorInfo} commentText={"this is the footer"} commentDate={new Date()}/>
  </React.StrictMode>,
  document.getElementById('root')
);
 */

/* part 1B: state and lifecycle */
ReactDOM.render(
  <React.StrictMode>
    <Clock />
    <LoginControl />
    <NameForm />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
