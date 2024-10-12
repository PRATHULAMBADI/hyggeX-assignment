import React from 'react';

import studentPhoto from '../images/student_image.png'

const ImageSegments = () => {
  return (
    <div className="w-full h-screen flex flex-col  items-center justify-center space-y-5 items-center">
      {/* First slice */}
      <div
        className='w-3/4 space-x-16 h-[150px] rounded-3xl overflow-hidden'
        style={{
          backgroundImage: `url(${studentPhoto})`,
          backgroundPosition: 'top',
          backgroundSize: '100% 450px', 
          backgroundRepeat: 'no-repeat',
        }}
      >
      </div>
      
         {/* Second slice */}
         <div
        className='w-3/4 h-[150px]  rounded-3xl overflow-hidden'
        style={{
          backgroundImage: `url(${studentPhoto})`,
          backgroundPosition: 'center left',
          backgroundSize: '100% 500px',
          backgroundRepeat: 'no-repeat',
        }}
      >
      </div>
      
      {/* Third slice*/}
      <div
        className='w-3/4 h-[150px] rounded-3xl overflow-hidden'
        style={{
          backgroundImage: `url(${studentPhoto})`,
          backgroundPosition: 'bottom', 
          backgroundSize: '100% 450px',
          backgroundRepeat: 'no-repeat',
        }}
      >
      </div>
    </div>

  );
};

export default ImageSegments;