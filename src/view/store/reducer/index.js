import { createActions, handleActions, combineActions } from "redux-actions";
import { handleIncrement, handleDecrement }  from 'view/api';  


const increaseAction = 'math/increaseCount';
const decreaseAction = 'math/decreateCount';

export const actions =  createActions({
  [increaseAction]: handleIncrement,
  [decreaseAction]: handleDecrement,
})

const reducer = handleActions({
  [increaseAction](state, action) {
    return { ...state, ...action.payload }
  },
  [decreaseAction](state, action) {
    return { ...state, ...action.payload }
  }
}, {
  count: 0,
})

export default reducer;