// import PropTypes from 'prop-types'
import React,{useState} from 'react'
import { Link } from 'react-router-dom';


const  Navbar = (props) => {
  //   static propTypes = {}
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     mobileMenuVisible: false,
  //   };
  // }
   
  // const toggleMobileMenu = () => {
  //   this.setState(prevState => ({
  //     mobileMenuVisible: !prevState.mobileMenuVisible,
  //   }));
  // };


  //   const { mobileMenuVisible } = this.state;
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };
    return (
      <>
        <nav className='bg-gray-100 bg-opacity-50'>
          <div className="max-w-7xl mx-auto px-4" >
            <div className='flex justify-between'>

              {/* navbar goes here */}
              <div className='flex space-x-5'>
                {/* logo */}
                <div className=''>
                  <Link to='/' className='flex items-center py-3 px-2 text-gray-700' >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-1 text-gray-900 hover:text-orange-700">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                    </svg>
                    <span className='text-orange-500 hover:text-rose-700 font-bold text-lg drop-shadow-lg'>NewsBuzz</span>
                  </Link>
                </div>
                {/* primary nav  */}
                <div className='hidden md:flex items-center
                 space-x-2'>
                  <Link to="/business" className=' py-3 px-2 text-gray-600 hover:text-gray-900 hover:bg-orange-300'>Business</Link>
                  <Link to="/entertainment" className=' py-3 px-2 text-gray-600 hover:text-gray-900 hover:bg-orange-300'>Entertainment</Link>
                  <Link to="/general" className=' py-3 px-2 text-gray-600 hover:text-gray-900 hover:bg-orange-300'>General</Link>
                  <Link to="/health"  className=' py-3 px-2 text-gray-600 hover:text-gray-900 hover:bg-orange-300'>Health</Link>
                  <Link to="/science" className=' py-3 px-2 text-gray-600 hover:text-gray-900 hover:bg-orange-300'>Science</Link>
                  <Link to="/sports"  className=' py-3 px-2 text-gray-600 hover:text-gray-900 hover:bg-orange-300'>Sports</Link>
                  <Link to="/technology" className=' py-3 px-2 text-gray-600 hover:text-gray-900 hover:bg-orange-300'>Technology</Link>
                </div>
              </div>

              {/* secondary nav  */}
              <div className='hidden md:flex items-center space-x-3'>
                <a role='button' href="/" className='w-10 h-10 py-3 px-3 mb-3 text-lg text-orange-300 hover:text-orange-500'><ion-icon name="sunny"></ion-icon></a>
                <a role='button' href="/" className='w-10 h-10 py-3 px-3 mb-3 text-lg text-orange-300 hover:text-orange-500'><ion-icon name="moon"></ion-icon></a>
                <a href="/" className=' py-2 px-2 bg-orange-500 text-gray-900 rounded hover:bg-orange-700   hover:text-gray-100  transition duration-300 font-semibold drop-shadow-lg'>Subscribe</a>
              </div>
              {/* mobile menu  */}
              {/* mobile button goes here */}
              <div className='md:hidden flex items-center'>
                <button onClick={toggleMobileMenu}className='mobile-menu-button'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-900 hover:text-orange-700">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className={`mobile-menu ${mobileMenuVisible ? '' : 'hidden'}`}>
            <Link to="/business" className='block py-2 px-5 text-sm  text-gray-600 hover:text-gray-900  hover:bg-orange-300'>Business</Link>
            <Link to="/entertainment" className='block py-2 px-5 text-sm  text-gray-600 hover:text-gray-900  hover:bg-orange-300'>Entertainment</Link>
            <Link to="/general" className='block py-2 px-5 text-sm  text-gray-600 hover:text-gray-900  hover:bg-orange-300'>General</Link>
            <Link to="/health" className='block py-2 px-5 text-sm  text-gray-600 hover:text-gray-900  hover:bg-orange-300'>Health</Link>
            <Link to="/science" className='block py-2 px-5 text-sm  text-gray-600 hover:text-gray-900  hover:bg-orange-300'>Science</Link>
            <Link to="/sports" className='block py-2 px-5 text-sm  text-gray-600 hover:text-gray-900  hover:bg-orange-300'>Sports</Link>
            <Link to="/technology" className='block py-2 px-5 text-sm  text-gray-600 hover:text-gray-900  hover:bg-orange-300'>Technology</Link>
          </div>
        </nav>
        {/* content goes here  */}
      </>
    )

}

export default Navbar



