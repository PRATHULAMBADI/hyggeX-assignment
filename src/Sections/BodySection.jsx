
import ImageSegments from '../components/ImageSegments'
import student from '../images/student-avatar.png'
import teacher from '../images/teacher-avatar.png'
import parent from '../images/parent-avatar.png'
import rightArrow from '../images/right_arrow.png'
import blueLine from '../images/blue_line.svg'
import SentenceDisplay from '../components/SentanceDisplay'


const Section = () =>  {
  return (
    
    <div className='w-full flex '>
{/*  left section */}
          <section className='px-16 py-24 k w-1/2'>

    {/* 3 icons*/}

            <div className=' py-10 flex items-center gap-16'>
                <div className='flex items-center gap-2'><img className='w-6 h-6 bg-blue-200  px-1 py-1' src={student} alt='Students' /><div className='font-custom font-semibold'>Students</div></div>
                <div className='flex items-center gap-2'><img className='w-6 h-6 bg-yellow-200 px-1 py-1' src={teacher} alt='Teachers' /><div className='font-custom font-semibold'>Teachers</div></div>
                <div className='flex items-center gap-2'><img className='w-6 h-6 bg-violet-200 px-1 py-1' src={parent} alt='Parents' /><div className='font-custom font-semibold'>Parents</div></div>
            </div>

    {/* heading - text*/}

            <div className='relative py-10  text-7xl font-bold font-custom'>Beyond Learning,<img className='absolute top-17 right-32' src= {blueLine} alt='blue_line' /> Becoming.</div>
            <div className='font-semibold  text-2xl text-justify'>
              Say goodbye to stressful study sessions. With Hyggex's
              AI-powered learning paths, you can improve your grades
              and well beingin less time, with less stress.
            </div>

    {/* button*/}

            <div className='flex py-12 justify-left items-center gap-6'>
                <button className=' flex justify-center items-center gap-3 border-none px-8 py-2.5 bg-blue-500 font-semibold text-white rounded shadow-2xl'>
                  <div>Start Learning</div>
                  <img className='h-4 w-4' src={rightArrow} alt='rightArrow'/>
                </button>
                <button className='border-none px-12 py-2.5 bg-indigo-200 font-semibold text-indigo-400 rounded shadow-2xl'>Book a Demo  </button>
            </div>

    {/* chaning text */}

            <SentenceDisplay/>

          </section>

{/* right section */}

<section className='w-1/2'>
<ImageSegments/>

</section>




    </div>
  )
}

export default Section
