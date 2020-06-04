import React from 'react';
import Slider from '../../components/Slider';
import './page1.css'


function Page1(props) {

  return (
    <div className="m-50">
      <div className="row">
        <div className="col-sm-7">
          <div className="text-wrap text-capitalize" >
            <span id='heading' >improve leadership skills,</span>
            <span id='sub-heading' >effortlessly</span>
            <span id='sub-line'  >with mobile gamesbuilt around engaging learning content</span>
           
            <div>
              <button className='p1-btn btn btn-primary'>google play</button>
              <button className='p1-btn btn btn-primary'>play store</button>
            </div>
          </div>
        </div>
        <div className="col-sm-5">
          <Slider />
          <div className='for_postion'>
              <button className='position-mobile btn btn-danger text-capitalize' onClick={() => (props.history.push('/login'))} >try free microskill</button>
            </div>
        </div>

      </div>
    </div>
  );
}

export default Page1;
