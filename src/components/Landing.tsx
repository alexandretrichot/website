import React from 'react';
import { HelloWorld } from './HelloWorld';
import { Wrapper } from './Wrapper';

export type LandingProps = {};

export const Landing: React.FC<LandingProps> = () => {
  /* const [maskOpacity, setMaskOpacity] = useState(1);

  useEffect(() => {
    const scrollHandler = () => setMaskOpacity((Math.min(window.scrollY, 100) / 100) * -1 + 1);
    window.addEventListener('scroll', scrollHandler);
    scrollHandler();

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []); */

  return (
    <header className='min-h-screen'>
      <Wrapper>
        <div className='flex items-center min-h-screen'>
          <HelloWorld />
        </div>
      </Wrapper>
    </header>
  );
};
