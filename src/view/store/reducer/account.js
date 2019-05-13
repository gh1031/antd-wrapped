import { createAction, handleAction } from 'redux-actions';

export const increment = createAction('INCREMENT', (payload) => payload * 2, () => ({ name: 'name'}));

const reducer = handleAction('INCREMENT', (state, payload) => ({ ...state, payload }), {})


export default reducer