import React from 'react';
import detail_comment_icon from '../assets/iconfont/detail_comment_icon.png'

const MovieComment = () => {
    return (
        <div>
             <div className="movie-comment-header">
                <img src={detail_comment_icon} alt="logo" className="movie-images-icon"/>
                <h4>观影评论</h4>
            </div>
        </div>
    );
};

export default MovieComment;