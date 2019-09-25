import React from 'react';
import { message } from 'antd';
import RemoteSelect from '@/components/RemoteSelect';

const handleFetch = params => new Promise((resolve) => {
  message.success(`${Object.keys(params)[0]}: ${Object.values(params)[0]}`);
  const genOptions = () => {
    const list = [];
    for (let i = 0; i < 8; i += 1) {
      list.push({
        id: params.id + i,
      });
    }
    resolve({ list });
  };
  setTimeout(genOptions, 50);
});

const Component = () => <RemoteSelect fetchApi={handleFetch} optionKey="id" />;

export default Component;
