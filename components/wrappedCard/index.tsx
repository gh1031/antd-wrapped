import React, { FC } from 'react';
import { Card } from 'antd';
import { CardProps } from 'antd/es/card';
import PropTypes from 'prop-types';

interface IProps extends CardProps {}

const WrappedCard: FC<IProps> = ({
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
  children: 'wrapped card',
};

export default WrappedCard;
