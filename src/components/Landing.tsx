import React from 'react';
import { Wrapper } from './Wrapper';

export type LandingProps = {};

export const Landing: React.FC<LandingProps> = () => {
  return (
    <Wrapper>
      <header className='wrapper' id='landing'></header>
    </Wrapper>
  );
};
