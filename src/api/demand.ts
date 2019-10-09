import axios from '@/src/utils/axios';
import { prefix } from '@/src/utils/proxy';

type IParams = {};

export const addDemand = (body?: IParams) => axios.post(`${prefix}/demand/add`, body);
export const fetchDemandList = (params?: IParams) => axios.get(`${prefix}/demand/list`, params);
