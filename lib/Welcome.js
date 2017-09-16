import React, { Component } from 'react';
import Search from './Search';


// export default class Welcome extends Component {
//   constructor(props) {
//     super(props);
//     // this.state = {
//     //   value: '',
//     // };
//     this.handleInputChange = this.handleInputChange.bind(this)
//     this.handleClick = this.handleClick.bind(this)
//   }
//
//   handleInputChange(event) {
//     this.setState({
//       value: event.target.value,
//     });
//   }
//
//   handleClick(props) {
//     this.props.getData(props.value);
//
//     this.setState({
//       value: '',
//     });
//   }
//
//   render(props) {
//     return (
//       <div className='searchForm'>
//         <Search
//                 getData={props.getData}
//         />
//       </div>
//     );
//   }
// }

export default function Welcome(props) {
  return (
    <div className='searchForm'>
      <Search
              getData={props.getData}
      />
    </div>
  );
}

//  value={this.state.value}


{/* <input
  className='searchInput'
  type='text'
  placeholder='search by city, state or zip'
  onChange={this.handleInputChange}>
</input>

<button className='submit-btn' onClick={this.handleClick}>
Weatha Mutha Fucka</button> */}
