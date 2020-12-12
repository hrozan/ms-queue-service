import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store';

import App from './components/App';

import './css/index.css';

import { fetchTodos } from './features/todos/todosSlice';
store.dispatch(fetchTodos)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);