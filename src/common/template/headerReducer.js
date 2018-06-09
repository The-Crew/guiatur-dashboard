import { CHANGE_STATE_SIDEBAR } from './types';

const INITIAL_STATE = { sidebarOpen: true };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_STATE_SIDEBAR:
      return { ...state, sidebarOpen: !state.sidebarOpen };
    default:
      return state;
  }
};
