import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import combinedReducers from '@reducers/combinedReducers';

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }

  return applyMiddleware(...middleware);
};

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.counter) nextState.counter = state.counter; // preserve counter value on client side navigation

    return nextState;
  }
  return combinedReducers(state, action);
};

const initStore = () => createStore(reducer, bindMiddleware([thunkMiddleware]));

const wrapper = createWrapper(initStore, { debug: false });

export default wrapper;
