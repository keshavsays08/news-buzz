import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export class NewsContainer extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 16,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            totalResults: 0,
            articles: [],
            page: 1,
            loading: true
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} Newsbuzz`
    }

    async updateNews() {
        this.props.setProgress(10);

        const topHeadlinesIN = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        let data = await fetch(topHeadlinesIN);
        this.setState({ loading: true });
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(50);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
            category: this.props.category
        })
        this.props.setProgress(100);
    }
    //cdm runs after render
    async componentDidMount() {
        this.updateNews();
    }
    // handleNextPage = async () => {
    //     // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults /this.props.pageSize))){
    //     //     let topHeadlinesIN = `https://newsapi.org/v2/top-headlines?${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
    //     //     this.setState({loading:true});
    //     //     let data = await fetch(topHeadlinesIN);
    //     //     let parsedData = await data.json();

    //     //     this.setState(
    //     //         {
    //     //             page: this.state.page + 1,
    //     //             articles: parsedData.articles,
    //     //             loading: false
    //     //         }
    //     //     )
    //     // }
    //     this.setState({ page: this.state.page + 1 })
    //     this.updateNews();
    // }
    // handlePrevPage = async () => {
    //     // console.log('prev')
    //     // let topHeadlinesIN = `https://newsapi.org/v2/top-headlines?${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    //     // this.setState({loading:true});
    //     // let data = await fetch(topHeadlinesIN);
    //     // let parsedData = await data.json();

    //     // this.setState(
    //     //     {
    //     //         page: this.state.page - 1,
    //     //         articles: parsedData.articles,
    //     //         loading:  false
    //     //     }
    //     // )
    //     this.setState({ page: this.state.page - 1 })
    //     this.updateNews();
    // }
    fetchMoreData = async () => {
        const nextPage = this.state.page + 1;
        const topHeadlinesIN = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${nextPage}&pageSize=${this.props.pageSize}`;
      
        try {
          let data = await fetch(topHeadlinesIN);
          let parsedData = await data.json();
      
          // Concatenate the new articles with the existing ones
          this.setState((prevState) => ({
            articles: [...prevState.articles, ...parsedData.articles],
            totalResults: parsedData.totalResults,
            page: nextPage,
            category: this.props.category,
          }));
        } catch (error) {
          // Handle errors here, e.g., display an error message
          console.error('Error fetching data:', error);
        }
      };
    render() {
        return (
            <>
                {/* heading below navbar  */}
                <h1 className='w-100 md:w-400 lg:w-48 font-bold text-lg text-gray-900 drop-shadow-lg text-center bg-orange-500'>Top {this.state.category} Headlines : India</h1>

                {/* loading spinner  */}
                {this.state.loading && <Spinner/>}

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length < this.state.totalResults} // Update hasMore based on articles loaded
                    loader={<Spinner/>} // Show spinner only when loading is true
                    // hasMore={this.state.articles.length !== this.state.totalResults}
                    // loader={<Spinner/>}
                >
                    {/* main news container */}
                    <div className='w-100 md:w-400 lg:w-48 items-center justify-center min-h-screen grid
            grid-cols-1
            md:grid-cols-2
            md:gap-8
       lg:grid-cols-4 lg:gap-3 container '>
                        {this.state.articles.map((e) => {

                            return <div key={e.url} >
                                <NewsItem title={e.title ? e.title : ''} description={e.description ? e.description : ''} imageUrl={e.urlToImage} newsUrl={e.url} Author={e.author} source={e.source.name} DatE={e.publishedAt} />
                            </div>
                        })}
                    </div>

                </InfiniteScroll>

                {/* pagination bar */}
                {/* <div className='flex justify-around bg-orange-500'>
                    <button disabled={this.state.page <= 1} onClick={this.handlePrevPage} href="/" className='text-center bg-gray-900 hover:bg-gray-800 py-2 px-2 mt-2 mb-2  rounded-lg font-semibold  ocus:scale-95 transition-all duration-200 ease-out text-md text-orange-400 hover:text-gray-100 drop-shadow-lg'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                        Prev</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.handleNextPage} href="/" className='text-center bg-gray-900 hover:bg-gray-800 py-2 px-2 mt-2 mb-2 rounded-lg font-semibold  ocus:scale-95 transition-all duration-200 ease-out text-md text-orange-400 hover:text-gray-100 drop-shadow-lg'>Next <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                    </button>
                </div> */}
                <div className='flex justify-around bg-orange-500 h-2 drop-shadow-lg'>
                    
                </div>


            </>
        )
    }
}

export default NewsContainer