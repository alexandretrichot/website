import React from 'react';

export type HelloWorldProps = {
  maskOpacity?: number;
};

export const HelloWorld: React.FC<HelloWorldProps> = ({ maskOpacity = 1 }) => {
  return (
    <div className='w-full'>
      <div className='relative pb-[53%]'>
        <video autoPlay playsInline muted loop className='absolute left-0 top-0 w-full h-full object-cover'>
          <source src='/landing.mp4' />
        </video>

        <svg className='absolute left-0 top-0 w-full' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 130 70' preserveAspectRatio='xMidYMid slice'>
          <defs>
            <mask id='mask' x='0' y='0' width='100%' height='100%'>
              <rect width='100%' height='100%' fill='white' opacity={maskOpacity} />
              <text
                fill='black'
                xmlSpace='preserve'
                style={{ whiteSpace: 'pre' }}
                fontFamily='Poppins, sans-serif'
                fontSize='42px'
                fontWeight={800}
                letterSpacing='0em'
              >
                <tspan x='10' y='32.2'>
                  Hello&#10;
                </tspan>
                <tspan x='-0.5' y='68'>
                  World
                </tspan>
              </text>
            </mask>
          </defs>
          <rect width='100%' height='100%' fill='#fcf6e4' style={{ mask: 'url(#mask)', WebkitMask: 'url(#mask)' }} />
        </svg>
      </div>
    </div>
  );
};
