import React from 'react'
import { Link } from 'react-router-dom';
import './card.scss'


const Card = ({ img ,id}) => {

  const handler = () => {
    
  }
    
  return (
    <>
      <Link to={`/details/${id}`}><img className='card' src={img} alt="cover" onClick={handler} /></Link>
     

      </>
  )
}

export default Card