import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, source, description, imageUrl, newsUrl, Author, DatE } = this.props;
        return (
            <>
                <div className='py-2'>
                    {/* card  */}
                    <div className=" max-w-sm p-2 bg-gray-100 bg-opacity-50 rounded-xl transform transition-all hover:translate-y-1 duration-300 shadow-lg hover:shadow-2xl overflow-hidden ">
                        <span className="position-absolute start-50 top-5 translate-middle badge rounded-pill bg-orange-600">
                        {source}</span>
                        {/* image  */}
                        <img className="h-60 md:h-50  lg:h-40 object-cover rounded-xl" src={!imageUrl ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvtAaH9yUCsbNXyEOMyfJvlcMsjnRclE7WTQ&usqp=CAU' : imageUrl} alt="" />
                        <div className='p-2'>
                            {/* heading  */}
                            <h5 className='font-bold text-lg'>{title}</h5>
                            {/* description  */}
                            <p className='text-sm text-gray-600'>{description}</p>
                            {/* date  */}
                            <p className='font-bold text-sm text-orange-600'>Published on {new Date(DatE).toDateString()}</p>
                            {/* date  */}
                            <p className='font-style: italic text-sm text-orange-600'>{!Author ? "Unknown" : Author}</p>
                        </div>
                        {/* cta  */}
                        <div className='m-2'>
                            <a role='button' href={newsUrl} target='_blank' rel="noreferrer" className='text-center bg-orange-500 hover:bg-orange-700 py-2 px-1 rounded-lg font-semibold  ocus:scale-95 transition-all duration-200 ease-out text-md text-gray-900 hover:text-gray-100 drop-shadow-lg'>Read More</a>
                        </div>
                    </div>
                    {/* card ends  */}
                </div>


                {/* grid */}
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      

            <div className="card">
                <div className="p-5 flex flex-col">
                    <div className="rounded-xl overflow-hidden">
                        <img className='' src="https://images.pexels.com/photos/1154505/pexels-photo-1154505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                </div> */}
                {/* title  */}
                {/* <div className='items-center'>
                <h5 className='mx-5 text-2xl md:text-3xl font-medium mt-3 '>Sea & Seagal</h5>
                <p className='text-slate-500 text-lg mt-3 mx-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nobis voluptatibus nisi veniam libero odit iusto eveniet, accusantium beatae accusamus.</p>
                <a href="/" className='text-center bg-orange-500 hover:bg-orange-700 py-2 px-1 rounded-lg font-semibold   mt-4 focus:scale-95 transition-all duration-200 ease-out'><span className='text-md text-gray-900 hover:text-gray-100'>Read More</span></a>
                </div>
            </div>
        </div> */}
                {/* end grid  */}

            </>

        )
    }
}

export default NewsItem