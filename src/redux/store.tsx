import {createStore} from 'redux';
import {favorisReducer} from './favorisReducer';

export const store = createStore(favorisReducer)


