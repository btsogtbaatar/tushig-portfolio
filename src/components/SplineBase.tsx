import Spline, { SplineProps } from '@splinetool/react-spline';
import React from 'react';

const SplineBase = React.memo((props: SplineProps) => {
  return <Spline style={{ maxHeight: '100vh' }} {...props} />;
});

export default SplineBase;
