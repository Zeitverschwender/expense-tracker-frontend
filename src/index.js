import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import categoryReducer from './store/reducers/categoryReducer'
import expenseReducer from './store/reducers/expenseReducer'
import userReducer from './store/reducers/userReducer'

const appReducer = combineReducers({
  expenses: expenseReducer,
  categories: categoryReducer,
  user: userReducer,
})

const rootReducer = (state, action) => {
  if(action.type === "LOGOUT"){
    state = undefined
  }
  return appReducer(state,action);
}

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
