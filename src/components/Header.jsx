import logo from '../../public/images/hyggexlogo.png'

const Header = () =>  {
  return (
    <div>
        <header>
          <nav className='flex justify-around items-baseline p-4'>

{/* logo */}

            <div className= 'flex items-center '>
              <img src={logo} alt='Logo' className='h-15 w-15 mr-2'/>
              <div className='text-customBlue text-6xl'>
                Hygge<b>X</b>
              </div>
              <hr/>
            </div>

{/* menu */}

            <div className=''>
              <ul className='flex space-x-16  text-l font-bold'>
                <li className='text-customBlue '>Learn</li>
                <li className='text-customBlue '>Pratice</li>
                <li className='text-customBlue'>Assessments</li> 
              </ul>
            </div>

{/* button */}

            <div className='flex space-x-2'>              
              <button className='border-2 text-customBlue  border-customBlue font-bold hover:bg-customBlue hover:text-white font-bold py-2 px-8 rounded' >Login</button>
              <button className='bg-customBlue text-white hover:bg-white hover:text-customBlue border-2 hover:border-customBlue font-bold py-2 px-8 rounded' >Sign-up</button>
            </div>
          </nav>
          <hr />
        </header>
    </div>
  )
}

export default Header
