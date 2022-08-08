import React from 'react'
import MovieDetails from '../components/MovieDetails'
import '../assets/less/MoviesPage.less'
import MovieIntroduce from '../components/MovieIntroduce'
import MovieImages from '../components/MovieImages'

function MoviesPage(){
    return (
        <div>
            <MovieDetails/>
            <MovieIntroduce/>
            <MovieImages/>
        </div>
    )
}

export default MoviesPage
