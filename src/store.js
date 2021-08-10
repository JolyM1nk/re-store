import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunkMiddleware from 'redux-thunk';

const stringMiddleware = () => (dispatch) => (action) => {
  if (typeof action === 'string') {
    return dispatch({
      type: action,
    });
  }

  return dispatch(action);
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware, stringMiddleware));

export default store;
