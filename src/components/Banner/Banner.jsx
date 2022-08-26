import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import './banner.scss';


const Banner = ({ arr = [{}] }) => {

    const imgUrl = "https://image.tmdb.org/t/p/original/";

    return (

        <Carousel fade  >

            {arr.map((item, index) => (

                <Carousel.Item key={index} id="banner" interval={500} >
                    <img
                        className="bannerImg"
                        id="bannerImage"
                        src={`${imgUrl}/${item.poster_path}`}
                        alt={`${index} banner`}

                    />
                            {/* <h1>{item.title}</h1> */}

                </Carousel.Item>

            ))}


        </Carousel>
    )
}

export default Banner


