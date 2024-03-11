import React,{useState,useEffect} from 'react'
import {Outlet} from 'react-router-dom'
import Nav from './Nav'

const Layout = ({searchData,setSearchData}) => {
  return (
    <>
    <Nav
      searchData={searchData}
      setSearchData={setSearchData}/>
    <Outlet />
    </>
  )
}

export default Layout