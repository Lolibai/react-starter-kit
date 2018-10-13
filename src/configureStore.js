import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = () => {
    return createStore(reducer, composeWithDevTools(applyMiddleware(
        thunkMiddleware, logger
    )));
};

export default configureStore;
