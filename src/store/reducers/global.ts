import { TOGGLE_LOADING } from '../actions';

const initialState = {
  loading: false,
}
export default function globalReducer(state = initialState, action) {
  console.log(state, action);
  switch (action.type) {
    case TOGGLE_LOADING:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state;
  }
}
