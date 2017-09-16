import React, { Component } from 'react';
import Search from './Search';

export default function Welcome(props) {
  return (
    <div className='searchForm'>
      <h1 className="welcome-message">
        Welcome To Weatherly
      </h1>
      <Search
              getData={props.getData}
      />
    </div>
  );
}
