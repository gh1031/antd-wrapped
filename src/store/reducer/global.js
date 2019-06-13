import { createActions, handleActions } from 'redux-actions';

const globalLoadingAction = 'global/globalLoading';

export const actions = createActions({
  [globalLoadingAction]: payload => payload,
});

const reducer = handleActions({
  [globalLoadingAction](state, actions) {
    return { ...state, ...actions.payload };
  },
}, {
  globalLoading: false,
});

export default reducer;
