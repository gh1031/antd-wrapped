import React from 'react';
import PropTypes from 'prop-types';
import HoistStatic from 'hoist-non-react-statics';
import { message } from 'antd';

function getDisplayName(WrappedComponent) {
  console.log(WrappedComponent.displayName)
  console.log(WrappedComponent.name)
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

function withPagination({
  pageNo,
  pageSize,
  total,
  handlePageChange,
  handleShowSizeChange,
}) {
  return (WrappedComponent) => {
    class withPaginationComponent extends React.Component {
      static propTypes = {

      }

      handlePageChange = (pageNo) => {
        
      }

      handleShowSizeChange = (pageSize) => {
        message.info(`pageSize: ${pageSize}`)
      }

      render() {
        return (
          <WrappedComponent
            pagination={{
              current: pageNo,
              pageSize,
              total,
              showSizeChanger: true,
              showQuickJumper: true,
              onChange: handlePageChange,
              onShowSizeChange: handleShowSizeChange
            }}
          />
        )
      }
    }

    withPaginationComponent.displayName = `withPagination${getDisplayName(WrappedComponent)}`
    return HoistStatic(withPaginationComponent, WrappedComponent)
  }
}

export default withPagination;
