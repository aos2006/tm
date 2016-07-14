import { combineReducers } from 'redux';
import menuReducer from './menu';
import tableListReducer from './tableList';
import tableFiltredReducer from './tableFiltred';

export default combineReducers({
  menu: menuReducer,
  tableListData: tableListReducer,
  sortedRowItems: tableFiltredReducer
})