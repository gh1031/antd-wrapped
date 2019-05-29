import React from 'react';
import PropTypes from 'prop-types';
import HoistStatic from 'hoist-non-react-statics';
import { message } from 'antd';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function withPagination({ pagination, handlePageChange, handleShowSizeChange }) {
  return (WrappedComponent) => {
    class withPaginationComponent extends React.Component {
      static propTypes = {};

      handlePageChange = (pageNo) => {
        message.info(`pageNo: ${pageNo}`);
      };

      handleShowSizeChange = (pageSize) => {
        message.info(`pageSize: ${pageSize}`);
      };

      render() {
        return (
          <WrappedComponent
            pagination={{
              ...pagination,
              showSizeChanger: true,
              showQuickJumper: true,
              onChange: handlePageChange,
              onShowSizeChange: handleShowSizeChange,
            }}
          />
        );
      }
    }

    withPaginationComponent.displayName = `withPagination${getDisplayName(WrappedComponent)}`;
    return HoistStatic(withPaginationComponent, WrappedComponent);
  };
}

export default withPagination;
