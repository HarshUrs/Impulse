import React from 'react';
import Flip from 'react-reveal/Flip';


export const Team = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Meet the Team</h2>
          <p>
          We are a group of professionals, all having a passion to learn as well as share our knowledge, skill and experience with others. 
          </p>
          <p>
          Learn with us!!
          </p>
        </div>
        <div id='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4 col-sm-6 team'>
                  <div className='thumbnail'>
                    {' '}
                    <Flip left><img src={d.img} alt='...' className='team-img' /></Flip>
                    <div className='caption'>
                    <Flip left> <h4>{d.name}</h4></Flip>
                    <Flip left> <p>{d.job}</p></Flip>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}