import React from 'react'
import './App.css'

const Repocards = (props) => {
  return (
    <>
      <a className='repocard' href={`https://github.com/${props.data.owner.login}/${props.data.name}`} target='_blank' rel='noopener noreferrer'>
        <div className='namedes'><h3 style={{color: "#EE6C4D"}}>
         {props.data.name}
        </h3>
        {props.data.description&&<span>Description: {props.data.description}</span>}
        </div>
        <div className='langwat'>
        <span className='lang'>{props.data.language}</span>
        <span className='watchers'>•{props.data.watchers}</span>
        </div>
        </a>
    </>
  )
}

export default Repocards