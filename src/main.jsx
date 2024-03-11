import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Layout from './Layout.jsx';
import Profile from './Profile.jsx'
import SearchResult from './SearchResult'
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const AppContainer = () => {
  const[searchData,setSearchData]=useState()

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout
        searchData={searchData}
        setSearchData={setSearchData} />}>
          <Route path="" element={<App/>} />
          <Route path="search" element={<SearchResult  searchData={searchData}
    setSearchData={setSearchData}/>}/>
          <Route path="Profile/:id" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
};
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AppContainer />
  </React.StrictMode>
);
