import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  }

  static getDerivedStateFromError(error) {
    console.log(error); // eslint-disable-line
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log('[BoundaryError]: ', error);  // eslint-disable-line
    console.log('[BoundaryErrorInfo]: ', info);  // eslint-disable-line
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <h1>出错啦～～～</h1>;
    }
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ErrorBoundary;
