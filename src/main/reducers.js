import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import HeaderReducer from 'common/template/headerReducer';
import RelatorioReducer from '../relatorio/relatorioReducer';

export default combineReducers({
  header: HeaderReducer,
  form: formReducer,
  relatorio: RelatorioReducer,
});
