import React from 'react';

import studentPhoto from '../images/student_image.png'

const ImageSegments = () => {
  return (
    <section className=" h-screen flex justify-center">
 <div className="relative h-screen flex items-center justify-center">
      {/* Eye Circle */}
      <div className="absolute clip-circle">
        <img src={studentPhoto} alt="Man" className="w-full h-auto" />
      </div>

      {/* Mouth Rectangle */}
      <div className="absolute clip-rectangle">
        <img src={studentPhoto} alt="Man" className="w-full h-auto" />
      </div>

      {/* Nose Triangle */}
      <div className="absolute clip-triangle">
        <img src={studentPhoto} alt="Man" className="w-full h-auto" />
      </div>
    </div>
</section>


  );
};

export default ImageSegments;