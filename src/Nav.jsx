import React,{useState} from 'react'
import{Link} from 'react-router-dom'
import './App.css'

const Nav = ({searchData,setSearchData}) => {
   const[userName,setUserName]=useState("")  

   function handleChange(e){
    setUserName(e.target.value)
   }
   function handleKeyDown(e) {
    if (e.key === 'Enter') {
      searchProfile();
    }
  }   

    const searchProfile = async () => {
        try {
          const res = await fetch(`https://api.github.com/search/users?q=${userName}`)
          const data = await res.json()
          console.log(data)
          const tempdata=data.items
          setSearchData(tempdata)

        } catch(e) {
          console.error(e);
        }
      }
  return (
    <>
    <div className='Navbar'>
        <Link to='/'><h1 className='git'>Git<span className='diffclr'>Search</span></h1></Link>
    <div className="search">
        <input placeholder="Search..." type="text" onChange={handleChange}  onKeyDown={handleKeyDown}/>
        <Link to='search'><button type="submit" onClick={searchProfile}>Go</button></Link>
      </div>
    </div>
    </>
  )
}

export default Nav