import React, { useState } from "react";
import ThumbnailImage from '../images/Thumbnail.png'
import yellow_line from '../images/yellow_line.svg'
const VideoDisplay = () => {
    const [isPlaying, setIsPlaying] = useState(false)

  const videoUrl = `https://www.youtube.com/embed/88NJP9j-qNo?autoplay=1`;

  return (

    <div className=' h-screen bg-violet-900'>
            <div  className='flex py-36 justify-center font-bold space-x-2 text-5xl'><div className='text-white'>See</div> <div className='text-blue-800'>Adaptive Learning <img className='py-3 px-16' src={yellow_line} alt=''/></div> <div  className='text-white'>in Action</div></div>    <div className="flex justify-center items-center">
      {isPlaying ? (
        <iframe
          width='860px'
          height='480px'
          src={videoUrl}
          title="YouTube video player"
          allow="autoplay"
          allowFullScreen
          className='flex items-center justify-center'
        ></iframe>
      ) : (
         <img
            onClick={() => setIsPlaying(true)}
            src={ThumbnailImage}
            alt="Video Thumbnail"
            className=" flex items-center justify-center w-half "
          />
      )}

        </div>
        </div>

    )
}

export default VideoDisplay;