import axios from 'axios';

const prefix = process.env.PROXY_BASE;
export const login = body => axios.post(`${prefix}/user/login`, body);
export const registry = body => axios.post(`${prefix}/user/registry`, body);

export const fetchMenus = () => axios.get(`${prefix}/user/menus`);
