import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Two from './Two';
import One from './One';
import Three from './Three';
import Four from './Four';
import Five from './Five';
import Six from './Six';
import Seven from './Seven';
import Eight from './Eight';
import Nine from './Nine';
import Ten from './Ten';
import Eleven from './Eleven';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {/*<One />*/}
    {/*<Two />*/}
    {/*<Three />*/}
    {/*<Four />*/}
    {/*<Five />*/}
    {/*<Six />*/}
    {/*<Seven />*/}
    {/*<Eight />*/}
    {/*<Nine />*/}
    {/*<Ten />*/}
    <Eleven />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
