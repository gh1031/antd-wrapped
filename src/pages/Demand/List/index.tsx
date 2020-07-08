import React, { useEffect, FC, useState } from 'react';
import { Table } from 'antd';
import { ColumnProps } from 'antd/es/table';
import { fetchDemandList } from '@/src/api/demand';
import { formatTimeStamp } from '@/src/utils/date';

interface TableRow {

}

const DemandList: FC = (): React.ReactElement => {
  const [dataSource, setList] = useState([]);
  async function getData() {
    const { list } = await fetchDemandList();
    setList(list);
  }

  useEffect(() => {
    getData();
  }, []);
  const columns: ColumnProps<TableRow>[] = [{
    title: '酒店名称',
    dataIndex: 'hotel',
  }, {
    title: '酒店地址',
    dataIndex: 'address',
  }, {
    title: '详细地址',
    dataIndex: 'addressDetail',
  }, {
    title: '房间号',
    dataIndex: 'rooms',
  }, {
    title: '房间总数',
    dataIndex: 'totalRooms',
  }, {
    title: '单价',
    dataIndex: 'price',
  }, {
    title: '开始时间',
    dataIndex: 'gmtStart',
    render(gmtStart) {
      return formatTimeStamp(gmtStart);
    },
  }, {
    title: '结束时间',
    dataIndex: 'gmtEnd',
    render(gmtEnd) {
      return formatTimeStamp(gmtEnd);
    },
  }];
  return (
    <div>
      <Table
        bordered
        columns={columns}
        dataSource={dataSource}
      />
    </div>
  );
};

export default DemandList;
