import React, { useState } from 'react';
import Cards from './Cards';
import { useParams } from 'react-router-dom';

const SearchResult = ({ searchData, setSearchData }) => {

  const searchCards = searchData ? searchData.map((data) => (
  
    <Cards
      data={data}
      key={data.id}
    />

    )) : null;


  console.log("searchdata in search", searchData);
  
  return (
    <>
    <div className='searchPage'>
    <h1 className="searchText">Search results</h1>
    <div className='searchCardsDiv'>
      {searchCards}
    </div>
    </div>
    </>
  );
};

export default SearchResult;
