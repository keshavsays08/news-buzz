import React,{useState,useEffect} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const NewsContainer = (props) => {

    const [totalResults, setTotalResults] = useState(0);
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState("general");

    const updateNews = async () => {
        props.setProgress(10);

        const topHeadlinesIN = `https://newsapi.org/v2/top-headlines?&country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
        let data = await fetch(topHeadlinesIN);
        setLoading(true);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(50);

        setArticles(parsedData.articles)
        setLoading(false)
        setTotalResults(parsedData.totalResults)
        setCategory(props.category)
       
        props.setProgress(100);
    }
    //cdm runs after render
   

    useEffect(() => {
        updateNews()
    }, [])
     
    const fetchMoreData = async () => {
        const nextPage = page + 1;
        const topHeadlinesIN = `https://newsapi.org/v2/top-headlines?&country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${nextPage}&pageSize=${props.pageSize}`;

        try {
            let data = await fetch(topHeadlinesIN);
            let parsedData = await data.json();

            // Concatenate the new articles with the existing ones
            setArticles([...articles, ...parsedData.articles])
            setTotalResults(parsedData.totalResults)
            setPage(nextPage)
            setCategory(props.category)
        } catch (error) {
            // Handle errors here, e.g., display an error message
            console.error('Error fetching data:', error);
        }
    };
   
        return (
            <>
                {/* heading below navbar  */}
                <h1 className='w-100 md:w-400 lg:w-48 font-bold text-lg text-gray-900 drop-shadow-lg text-center bg-orange-500'>Top {category} Headlines : India</h1>

                {/* loading spinner  */}
                {loading && <Spinner />}

                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    loader={<Spinner />}
                    hasMore={articles.length < totalResults} // Update hasMore based on articles loaded
                     // Show spinner only when loading is true

                >
                    {/* main news container */}
                    <div className='w-100 md:w-400 lg:w-48 items-center justify-center min-h-screen grid
            grid-cols-1
            md:grid-cols-2
            md:gap-8
       lg:grid-cols-4 lg:gap-3 container '>
                        {articles.map((e) => {

                            return <div key={e.url} >
                                <NewsItem title={e.title ? e.title : ''} description={e.description ? e.description : ''} imageUrl={e.urlToImage} newsUrl={e.url} Author={e.author} source={e.source.name} DatE={e.publishedAt} />
                            </div>
                        })}
                    </div>

                </InfiniteScroll>

                <div className='flex justify-around bg-orange-500 h-2 drop-shadow-lg'>

                </div>
            </>
        )
    }

    NewsContainer.defaultProps = {
        country: 'in',
        pageSize: 16,
        category: 'general'
    }
    NewsContainer.propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    export default NewsContainer;