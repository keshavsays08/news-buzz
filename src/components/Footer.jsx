import React from 'react'

function Footer() {
  return (
    //main footer
    <div className='w-full pt-5 bg-gray-100 text-gray-900'>
      {/* upper footer  */}
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
          {/* section 1  */}
          <div className='mb-5'>
            <h4 className='text-2xl pb-4  text-orange-500 hover:text-rose-700 font-bold drop-shadow-lg'>NewsBuzz</h4>
            <p className='text-gray-500'>
              3rd Floor GIFT, City Center<br />
              Dehradun, UK 248121<br />
              India <br /><br />
              <strong>Phone: </strong>+91 800-077-0008 <br />
              <strong>Email: </strong>info@newsbuzz.com <br />
            </p>
          </div>
          {/* section 2  */}
          <div className='mb-5'>
            <h4 className='pb-3 text-gray-600 hover:text-gray-900 font-bold text-lg drop-shadow-lg'>Explore More</h4>
            <ul className='text-gray-500'>
              <li className="pb-3"> <i className='fa fa-chevron-right'></i> <a href="/" className='hover:text-orange-600'>Travel</a></li>
              <li className="pb-3"> <i className='fa fa-chevron-right'></i> <a href="/" className='hover:text-orange-600'>Automobile</a></li>
              <li className="pb-3"> <i className='fa fa-chevron-right'></i> <a href="/" className='hover:text-orange-600'>Education</a></li>
              <li className=""> <i className='fa fa-chevron-right'></i> <a href="/" className='hover:text-orange-600'>Lifestyle</a></li>
            </ul>
          </div>
          {/* section 3  */}
          <div className='mb-5'>
            <h4 className='pb-3 text-gray-600 hovorangee6t-gray-900 font-bold text-lg drop-shadow-lg'>Useful Links</h4>
            <ul className='text-gray-500'>
              <li className="pb-3"> <i className='fa fa-chevron-right'></i> <a href="/" className='hover:text-orange-600'>About NewsBuzz</a></li>
              <li className="pb-3"> <i className='fa fa-chevron-right'></i> <a href="/" className='hover:text-orange-600'>Contact NewsBuzz</a></li>
              <li className="pb-3"> <i className='fa fa-chevron-right'></i> <a href="/" className='hover:text-orange-600'>Privacy Policy</a></li>
              <li className=""> <i className='fa fa-chevron-right'></i> <a href="/" className='hover:text-orange-600'>Term of Use</a></li>
            </ul>
          </div>
          {/* section 4  */}
          <div className='mb-5'>
            <h4 className='pb-8 text-gray-600 hover:text-gray-900 font-bold text-lg drop-shadow-lg'>Join Our Newsletter</h4>
            <p className='pb-10 text-gray-500'>Get daily dose of top news headlines from all categories via email.</p>
            <form action="" className='flex flex-row mr-5 flex-wrap'>
              <input className='text-gray-500 w-2/3 p-2 focus:border-orange-500  className="pb-3" border-2 border-orange-200' placeholder='example@xyz.com' type="email" name="" id="" />
              <button className='p-2 w-1/3 pb-1 py-2 px-2 bg-orange-500 text-gray-900 hover:bg-orange-700   hover:text-gray-100  transition duration-300 font-semibold drop-shadow-lg'>Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      {/* lower footer  */}
      <div className='p-2 w-full bg-gray-200 text-gray-800 px-10'>
        <div>
          <div className='text-center'>
            <div>
              <p><strong>Copyright © 2023 NewsBuzz </strong>. All rights are reserved</p>
            </div>
          </div>
        </div>

      </div>
    </div >

  )
}

export default Footer