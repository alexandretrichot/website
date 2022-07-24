import React from 'react';

export type WrapperProps = {
  children?: React.ReactNode;
};

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <div className='max-w-6xl mx-auto px-4'>{children}</div>;
};
