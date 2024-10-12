import image1 from '../logos/a.png';
import image2 from '../logos/b.png';
import image3 from '../logos/c.png';
import image4 from '../logos/d.png';
import image5 from '../logos/e.png';
import image6 from '../logos/f.png';

const Footer = () =>{
    return(
        <div className='flex  justify-left item-center w-full  px-20'>
    {/* text */}
            <div className='flex flex-col justify-center'>
                <div className=' text-xl text-blue-800 w-32 font-semibold'>Trusted by the best</div>    
                <div className='  text-xl text-slate-400'>in the industry</div>    
            </div>    
    {/* logo */}
            <div className=' flex  space-x-16 overflow-hidden group'> 
                <div className='flex items-center animate-loop-scroll space-x-16 group-hover:paused'>
                    <img loading='lazy' className=' w-64 h-16 max-w-none' src= {image1} alt='image1' />
                    <img loading='lazy' className='w-56 h-16  max-w-none' src= {image2} alt='image2' />    
                    <img loading='lazy' className='w-40 h-16 max-w-none' src= {image3} alt='image3' />    
                    <img loading='lazy' className='w-40 h-16 max-w-none' src= {image4} alt='image4' />    
                    <img loading='lazy' className='w-56 h-16 max-w-none' src= {image5} alt='image5' />    
                    <img loading='lazy' className='w-64 h-26 max-w-none' src= {image6} alt='image6' />    
                </div>
                <div className='flex items-center animate-loop-scroll space-x-16 group-hover:paused' aria-hidden='true' >
                    <img loading='lazy' className='w-64 h-16 max-w-none' src= {image1} alt='image1' />    
                    <img loading='lazy' className='w-56 h-16 max-w-none' src= {image2} alt='image2' />    
                    <img loading='lazy' className='w-40 h-16 max-w-none' src= {image3} alt='image3' />    
                    <img loading='lazy' className='w-40 h-16 max-w-none' src= {image4} alt='image4' />    
                    <img loading='lazy' className='w-56 h-16 max-w-none' src= {image5} alt='image5' />    
                    <img loading='lazy' className='w-64 h-16 max-w-none' src= {image6} alt='image6' />
                </div>
            </div>

        </div> 
    )
}

export default Footer;