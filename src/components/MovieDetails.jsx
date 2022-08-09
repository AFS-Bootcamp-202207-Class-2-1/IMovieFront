import React from 'react';
import  MovieCover from '../assets/images/movie_cover.png';
import { Rate } from 'antd'
import '../assets/less/MovieDetails.less'

const MovieDetails = (props) => {
    const { movie } = props;
    return (
        <div className="Detail-Movie">
            <img src={MovieCover} alt="cover" />
            <div className="DetailIntroduce">
                <div className="fs-20 black-1">明日战纪</div>
                <div className="fs-18 black-1 mt-28" >动作，悬疑</div>
                <div className="fs-14 black-1 mt-20">片长： 99分钟</div>
                <Rate allowHalf defaultValue={2.5} className="mt-13"/>
                <div className="fs-14 black-1 mt-20">主演： 马丽，沈腾</div>
                <button className="button mt-28">立马购票</button>
            </div>
        </div>
    );
};

export default MovieDetails;