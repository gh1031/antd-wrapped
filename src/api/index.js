import axios from 'axios';

export const handleIncrement = payload => payload;
export const handleDecrement = payload => payload;

export function getMenu() {
  return axios.get('/proxy/users/menus', { test: 1, skip: true });
}
