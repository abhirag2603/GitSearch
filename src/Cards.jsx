import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

const Cards = (props) => {
  return (
    <Link to={`/profile/${props.data.id}`} className='cardsWithLink'>
      <div className="card">
        <img className="img" src={props.data.avatar_url} alt={props.data.login} />
        <span >{props.data.login}</span>
      </div>
    </Link>
  )
}

export default Cards;
