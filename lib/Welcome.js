import React, { Component } from 'react';
import Search from './Search';


export default function Welcome(props) {
  return (
    <section className='search-form, rain'>
      <h1 className="welcome-message">
        Welcome To Weatherly
      </h1>
      <Search getData={props.getData}/>
    </section>
  );
}
