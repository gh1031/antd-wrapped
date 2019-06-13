import React from 'react';
import { Card } from 'antd';
import PropTypes from 'prop-types';

const WrappedCard = ({
  title,
  children,
}) => (
  <Card
    title={title}
  >
    {children}
  </Card>
);

WrappedCard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
  title: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
};

WrappedCard.defaultProps = {
  children: 'card',
};

export default WrappedCard;
