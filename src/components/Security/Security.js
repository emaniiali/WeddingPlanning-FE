import React from 'react'

export default function Security(props) {
  return (
    <>

<div className='container'>
  <div className='row'>
    <div className='col-md-3'>
      <div class="card" >
        <img class="card-img-top" src="https://london.bridestory.com/images/c_fill,dpr_1.0,f_auto,fl_progressive,pg_1,q_80,w_680/v1/assets/img_8680-djBj6cL3fY/white-pearl-decoration_four-seasons-hotel-jakarta-grand-ballroom-2021-10-24_1.jpg" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{props.name}</h5>
          <p class="card-text">{props.description}, with a number of security: {props.noOfSecurity}</p>
          <a href="#" class="btn btn-light ">Book</a>
        </div>
      </div>
    </div>
</div>
</div>
<br></br>
    </>
  )
}