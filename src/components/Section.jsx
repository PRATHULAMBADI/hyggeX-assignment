
import studentPhoto from '../../public/images/student_image.png'
import student from '../../public/images/student-avatar.png'
import teacher from '../../public/images/teacher-avatar.png'
import parent from '../../public/images/parent-avatar.png'
const Section = () =>  {
  return (
    <div>
        <div className='flex w-full '>
{/*  left section */}
          <section className='bg-red-500'>

            <div className=' bg-blue-500 flex items-center space-x-10'>
                <div className='flex items-center gap-2'><img className='w-8 h-8 bg-red-200' src={student} alt='Students' />Students</div>
                <div className='flex items-center gap-2'><img className='w-8 h-8 bg-fuchsia-200' src={teacher} alt='Teachers' />Teachers</div>
                <div className='flex items-center gap-2'><img className='w-8 h-8 bg-yellow-200' src={parent} alt='Parents' />Parents</div>

            </div>

            <div>Beyond Learning, Becoming.</div>
            <div>Say goodbye to stressful study sessions. With Hyggex's
                AI-powered learning paths, you can improve your grades 
                and well beingin less time, with less stress.
            </div>

            <div>
                <button>Start Learning  </button>
                <button>Book a Demo  </button>
            
            </div>
            <div>section 5</div>
          </section>

{/* right section */}

          <section className='bg-green-500'>
            <div>section 2
              <div><img src={studentPhoto} className='' alt='Image_akash' /></div>              
            </div>
          </section>
        </div>
    </div>
  )
}

export default Section
