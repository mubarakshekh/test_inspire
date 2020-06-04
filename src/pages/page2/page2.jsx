import React from 'react';
import Slider from '../../components/Slider';
import './page2.css'
import Login from '../../components/login';



function Page2() {
  return (
    <div className="m-50">
      <div className="row">
        <div className="col-sm-7">
          <div className='margin'>
            <div className=' position'>
              <span className='d-block text-danger text-capitalize font-size' >learn a microskill for FREE!!</span>
              <span >Experience Master-O and get a chance to earn LinkedIn certificate absoluetly free!</span>
            </div>
            <Login />
          </div>
        </div>
        <div className="col-sm-5">
          <Slider />
        </div>
      </div>
    </div>
  );
}

export default Page2;