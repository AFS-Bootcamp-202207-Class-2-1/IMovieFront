import { Row, Col } from 'antd'
import React from 'react'
import detail_images_icon from '../assets/iconfont/detail_images_icon.png'
import movie_detail_cover from '../assets/images/movie_detail_cover.png'

function MovieImages(props) {
    const {images} = props;
    return (
        <div>
            <div className="movie-images-header">
                <img src={detail_images_icon} alt="logo" className="movie-images-icon"/>
                <h4>相关图片</h4>
            </div>
            <div className="movie-images-body">
                <Row style={{height: "293px"}}>
                    <Col span={15} align="right">
                        <img src={movie_detail_cover} alt="images" className="large-image"/>
                    </Col>
                    <Col span={9} >
                        <Row style={{height: "146.5px"}}>
                            <Col span={12} align="center">
                                <img src={movie_detail_cover} alt="images" className="small-image" />
                            </Col>
                            <Col span={12}>
                                <img src={movie_detail_cover} alt="images" className="small-image"/>
                            </Col>
                        </Row>
                        <Row style={{height: "146.5px"}} align="bottom">
                            <Col span={12} align="center">
                                <img src={movie_detail_cover} alt="images" className="small-image"/>
                            </Col>
                            <Col span={12}>
                                <img src={movie_detail_cover} alt="images" className="small-image"/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default MovieImages
