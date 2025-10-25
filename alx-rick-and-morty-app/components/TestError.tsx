// components/TestError.tsx
import React from 'react';

const TestError = () => {
  throw new Error('Test error!');
  return <div>This will not render</div>;
};

export default TestError;
