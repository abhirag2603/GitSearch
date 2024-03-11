import React, { useState, useEffect } from 'react';
import './App.css';
import Cards from './Cards'
import Nav from './Nav';
import { Link } from 'react-router-dom';

const App = () => {

  const [popularUsers, setPopularUsers] = useState([]);
  const homeCards=popularUsers.map((data)=>{
    return(
      <Cards
      data={data}
      key={data.id}
      />
    )
  })
  console.log("popusers",popularUsers)
  useEffect(() => {
    const fetchPopularUsers = async () => {
      try {
        const res = await fetch('https://api.github.com/users?sort=followers');
        const data = await res.json();
        setPopularUsers(data)
        console.log(data)
      } catch (e) {
        console.error(e);
      }
    };

    fetchPopularUsers();
  }, []);

  return (
    <>
      <h1 className='homeText'>Popular github users</h1>
      <div className='homeCardsDiv'>{homeCards}</div>
    </>
  );
};

export default App;
