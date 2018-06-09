import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import HeaderReducer from 'common/template/headerReducer';
import DashboardReducer from '../dashboard/relatorioReducer';

export default combineReducers({
  header: HeaderReducer,
  form: formReducer,
  dashboard: DashboardReducer,
});
