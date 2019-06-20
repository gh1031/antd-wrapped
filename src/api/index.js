import axios from '@/src/utils/axios';

export const handleIncrement = payload => payload;
export const handleDecrement = payload => payload;

export function getMenu() {
  return axios.get('/proxy/users/menus');
}
