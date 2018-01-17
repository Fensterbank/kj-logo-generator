import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const composeEnhancers = composeWithDevTools({
    name: 'kj-logo-generator',
    serialize: true,
});

const middleware = [];

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(...middleware)
    )
);

export default store;