import axios from 'axios';

const prefix = process.env.PROXY_BASE;

export const updateMenus = body => axios.post(`${prefix}/user/menus/update`, body);
