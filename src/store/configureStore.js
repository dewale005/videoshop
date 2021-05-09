import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import { productsReducer } from './reducer/products.reducer';


// const persisted= persistReducer(persistConfig, rootReducer)

const logger= createLogger();
const rootReducer = combineReducers({
  product: productsReducer
});

// const composeEnhancers = compose;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, logger)));
};



export default configureStore;