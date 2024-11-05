import Spline, { SplineProps } from '@splinetool/react-spline';
import React, { useState } from 'react';

const SplineBase = React.memo((props: SplineProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading && (
        <div className="loading-indicator">
          <p>Loading...</p>
        </div>
      )}
      <Spline style={{ maxHeight: '100vh' }} {...props} onLoad={handleLoad} />
    </div>
  );
});

export default SplineBase;
