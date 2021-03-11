import React from 'react'

// const Header = ({cityName, temp}) => {
//     return (
//         <div className='row'>
//           <h2>{cityName}</h2>
//           <h5>Today's Temperature: {temp}</h5>
//         </div>
//     )
// }

const StatelessComponent = props => 
<div className='row'>
  <h2>{props.cityName}</h2>
  <h5>Today's Temperature: {props.temp}</h5>
</div>

export default StatelessComponent
