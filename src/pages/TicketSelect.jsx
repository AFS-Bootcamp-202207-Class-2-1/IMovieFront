import React from 'react';
import '../assets/less/ticketSession.less'
import { useState,useEffect } from 'react';
import { getSessions,getMovieDetail } from '../api/ticketSelect'
import { Button,DatePicker } from "antd";
import SelectSeat from '../components/SelectSeat';

const TicketSelect = () => {

    const [sessionList,setSessionList] = useState([])
    const [details,setDetails] = useState({})

    useEffect(() => {
        getMovieDetail().then((response) => {
            setDetails(response.data)
        });
        getSessions().then((response) => {
            console.log(response.data)
            setSessionList(response.data)
        })
    }, [])

    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };

    return (
        <div className="Detail-Movie">
            <img className='movie-cover' src={details.movieImage} alt="cover" />
            <div className="DetailIntroduce">
                <div className="fs-20 black-1 movie-name">{details.movieName}</div>
                <div className="fs-18 black-1 mt-28">{details.movieCatagory}</div>
                <div className="fs-14 black-1 mt-20">时长： {details.movieTime} 分钟</div>
                <div className="fs-14 black-1 mt-20">主演： {details.moviePerformers}</div>
                <div className="fs-14 black-1 mt-20 session-container">场次：<DatePicker onChange={onChange} />
                    <div className='session-selector'>
                        {
                            sessionList.map((item,index) => (
                                <Button key={index} value={item}>{item.cinemaName} {item.cinemaMovieTimeWatchtime} {item.cinemaMovieTimeEndtime}</Button>
                        ))}
                    </div>
                </div>
            </div>
            <div className='score'>
                {details.movieScore}
            </div>
            <SelectSeat/>
        </div>
    );
};

export default TicketSelect;