import React, {
  useCallback, useState, forwardRef,
} from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';
import useEventListener from '@/components/hooks/use-event-listener';
import WrappedForm from '@/components/WrappedForm';

const RenderCompnent = forwardRef(
  ({ name, pos }, ref) => <div ref={ref}>{name}X: {pos.x};  {name}y: {pos.y}</div>,
);

RenderCompnent.propTypes = {
  name: PropTypes.string.isRequired,
  pos: PropTypes.object.isRequired,
};


const MouseMove = ({ form }) => {
  const [mouseClient, setMouseClient] = useState({ x: 0, y: 0 });
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const meta = {
    formItems: [
      {
        label: 'clientX, clientY',
        key: 'client',
        field: 'client',
        component: RenderCompnent,
        componentProps: {
          name: 'client',
          pos: mouseClient,
        },
      },
      {
        label: 'offsetX, offsetY',
        key: 'offset',
        field: 'offset',
        component: RenderCompnent,
        componentProps: {
          name: 'offset',
          pos: mouseOffset,
        },
      },
    ],
  };
  const handler = useCallback(
    (event) => {
      setMouseClient({ x: event.clientX, y: event.clientY });
      setMouseOffset({ x: event.offsetX, y: event.offsetY });
    },
    [],
  );


  useEventListener('mousemove', handler, document.getElementsByTagName('main')[0]);
  return (
    <>
      <WrappedForm form={form} meta={meta} />
    </>
  );
};

MouseMove.propTypes = {
  form: PropTypes.object.isRequired,
};
MouseMove.defaultProps = {

};
export default Form.create()(MouseMove);
