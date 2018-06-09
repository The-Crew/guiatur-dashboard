import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import HeaderReducer from 'common/template/headerReducer';

export default combineReducers({
  header: HeaderReducer,
  form: formReducer,
});
