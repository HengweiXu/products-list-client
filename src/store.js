import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import products from './components/products/reducer'

export const store = createStore(
    combineReducers({
        products
    }),
    applyMiddleware(thunk)
);
