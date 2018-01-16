import React from 'react';
import Search from './Search';
import PropTypes from 'prop-types';

export default function Welcome(props) {
  return (
    <section className='search-form background-image'>
      <div className='form-background'>
      <header className='welcome-header'>
        <div className ='header-content'>
				<span className='avatar'><img src='images/duck.jpg' alt='' /></span>
				<h1 className='welcome-type'>Welcome To Weatherly</h1>
      </div>
			</header>

			<hr />
      <Search getData={props.getData}/>
    </div>
    </section>
  );
}

Welcome.propTypes = {
  getData: PropTypes.func
};
