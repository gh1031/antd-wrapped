import { useEffect, useState } from 'react';

/**
 *
 * @param {Function} api 请求数据方法
 * @param {Object} options 请求参数
 */
export default function useFetchData(api, options) {
  const [pageSize, setPageSize] = useState(10);
  const [current, setCurrent] = useState(1);
  function onPageChange() {

  }
  useEffect(() => {
    async function fetchData() {
      const { list, ...rest } = await api(options);
    }
    fetchData();
  }, [api, options]);
}
