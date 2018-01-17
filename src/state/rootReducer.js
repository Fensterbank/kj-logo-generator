import { combineReducers } from 'redux';
import logo from './logo';

export default combineReducers({
    logo: logo.reducer,
});