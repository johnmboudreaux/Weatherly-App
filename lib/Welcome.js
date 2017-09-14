import React, { Component } from 'react';

const Welcome = ({ setValue, getData }) => {
    return (
      <div className='searchForm'>
        <input
               className='searchInput'
               type='text'
               placeholder='search by city, state or zip'
              //  value={value}
               onChange={(e) => {
                 setValue({ value: e.target.value });
               }}>
        </input>

        <button className='submit-btn' onClick={getData}>
          Weatha Mutha Fucka</button>
      </div>
    );
};


export default Welcome;
