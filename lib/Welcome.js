import React, { Component } from 'react';
import Search from './Search';


export default function Welcome(props) {
  return (
    <section className='search-form background-image'>
      <div className='form-background'>
      <header className='welcome-header'>
        <div className ='header-content'>
				<span className='avatar'><img src='assets/duck.jpg' alt='' /></span>
				<h1 className='welcome-type'>Welcome To Weatherly</h1>
				<p className='welcome-type'>A Compliment Perhaps?</p>
      </div>
			</header>

			<hr />
      <Search getData={props.getData}/>
    </div>
    </section>
  );
}
