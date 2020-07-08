import { useEffect, useState } from 'react';
import { PaginationProps } from 'antd/lib/pagination';

interface FetchDataOptions<T = {}> {
  params?: {
    [key: string]: unknown;
  };
  skip?: boolean;
  showSelect?: boolean;
  showPagination?: boolean;
  initialPagintion?: PaginationProps & T | undefined;
  responseBO?: string[];
}
interface PageNo { pageNo: number }

type CustomPagination = PaginationProps & PageNo;

const defaultPage = {
  pageNo: 1,
  pageSize: 20,
  showSizeChanger: true,
};
const defaultResponseBO = ['data', 'pageNo', 'pageSize', 'total'];
function pickValue(source: object, keys: string[] = []): object {
  const ret = {};
  for (let i = 0; i < keys.length; i += 1) {
    ret[keys[i]] = source[keys[i]];
  }
  return ret;
}

function useFetchData(request, options: FetchDataOptions<PageNo>) {
  if (typeof request !== 'function') {
    throw new Error('first argument must be function!');
  }
  const {
    params,
    skip = false,
    showPagination = false,
    initialPagintion,
    dataKeys,
    paginationKeys,
  } = options;
  const [data, setData] = useState(null);
  const [pagination, setPagination] = useState(initialPagintion);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  let ret = {
    loading,
    pagination,
    onChange: handleTableChange
  };
  const deps: unknown[] = [
    params,
    pagination.pageSize,
    pagination.pageNo,
  ];

  // 监听表格变化
  function handleTableChange() {

  }

  if (params) {
    deps.push(params);
  }


  useEffect(() => {
    async function doRequest() {
      try {
        setLoading(true);
        const response = await request({
          ...params,
        });
        setLoading(false);
        if (showPagination) {
          const data = pickValue(response || {}, dataKeys || defaultResponseBO);
          const pagination = pickValue(response || {}, paginationKeys);
          setData(data);
          setPagination(pagination);
          ret = {
            ...ret,
            ...data,
            pagination,
          }
        }
      } catch (e) {
        setLoading(false);
      }
    }
    if (!skip) {
      doRequest();
    }
  }, deps);

  return ret;
}

export default useFetchData;
