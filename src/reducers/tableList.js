import {LOAD_DATA_FOR_TABLE_LIST, SUCCESS, START} from '../constants';import store from '../store'const defaultState = {  loading: false,  isLoaded: false,  data: {}};export default (state = defaultState, action) => {  const { type, payload, response } = action;  switch (type) {    case  LOAD_DATA_FOR_TABLE_LIST + START:      return Object.assign({}, state, {data: {}, loading: true,  isLoaded: false});    case LOAD_DATA_FOR_TABLE_LIST + SUCCESS:      return Object.assign({}, state, {data: response, loading: true,  isLoaded: true});    }  return state;}