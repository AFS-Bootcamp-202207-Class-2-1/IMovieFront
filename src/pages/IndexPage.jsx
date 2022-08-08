import React,{ useState,useEffect } from 'react'
import '../assets/less/IndexPage.less'
import { getMovies } from '../api'
import MovieItem from '../components/MovieItem'
import Carousel from '../components/Banner'

const IndexPage = () => {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        getMovies().then((response) => {
            setMovieList(response.data)
        })
    }, [])
    
    return (
        <div>
            <Carousel />
            <div className='title'>全部电影</div>
            <div className='movies-recommend'>
                {
                    movieList.map((item,index) => (
                        <MovieItem key={index} value={item}/>
                ))}
            </div>
        </div>
    )
}

export default IndexPage;