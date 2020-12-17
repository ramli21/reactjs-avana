import React from 'react';
import ReactDOM from 'react-dom';
import './assets/sass/main.scss';

import { Provider } from "react-redux";
import store from './redux/store';

import App from './App';
import reportWebVitals from './reportWebVitals';

class Home extends React.Component{
  componentDidMount(){
    document.title = "Avana Assignment - Ahmad Ramli"
  }

  render(){
    return(
      <Provider  store={store}>
        <App />
      </Provider>
    )
  }
}

ReactDOM.render(
  <Home />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
