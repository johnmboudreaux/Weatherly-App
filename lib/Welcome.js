import React, { Component } from 'react';
import Search from './Search';

export default function Welcome(props) {
  return (
    <div className='searchForm'>
      <Search
              getData={props.getData}
      />
    </div>
  );
}
