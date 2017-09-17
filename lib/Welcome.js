import React, { Component } from 'react';
import Search from './Search';


export default function Welcome(props) {
  return (
    <section className='search-form'>
      <header>
				<span class="avatar"><img src="images/duck.jpg" alt="" /></span>
				<h1>Welcome To Weatherly</h1>
				<p>A Compliment Perhaps?</p>
			</header>

			<hr />
      <Search getData={props.getData}/>
    </section>
  );
}
