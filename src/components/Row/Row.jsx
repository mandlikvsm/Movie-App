import React from 'react'
import Card from '../Card/Card'
import './row.scss'

const Row = ({ title, arr = [{}] }) => {
    
    const imgUrl = "https://image.tmdb.org/t/p/original/"
    return (
        <div className='row'>

            <h2> {title}</h2>
            <div>
                {
                    arr.map((item, index) =>
                        <Card key={index} img={`${imgUrl}/${item.poster_path}`} id={item.id} arr />
                    )
                }

            </div>

        </div>
    )
}

export default Row