import pizzasReducer from './pizzas';
import filtersReducer from './filter'; 
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  pizzas:pizzasReducer,
  filters: filtersReducer,
});

export default rootReducer;