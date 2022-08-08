import React from 'react'
import detail_images_icon from '../assets/iconfont/detail_images_icon.png'

function MovieImages() {
    return (
        <div>
            <div className="movie-images-header">
                <img src={detail_images_icon} alt="logo" className="movie-images-icon"/>
                <h4>相关图片</h4>
            </div>
            <div className="movie-images-body">
                
            </div>
        </div>
    )
}

export default MovieImages
