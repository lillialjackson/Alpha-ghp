import React from 'react';
import './home.css'



const Home = ({ username, location, experienceLevel }) => {
  return (

        <div className='form'>
          <h4> Climb, Explore, Connect! </h4>
          <span className='homecontainer introcontainer'>
            <p className='hometext'> This is Alpha for Beta! Make connections in the climbing community! Connect with friends, and find new partners!</p>
          </span>
          <span className='homecontainer profilecontainer'>
            <p className='hometext'>
              {`Welcome back ${username}! \n The climbing is lovely in ${location}! \n Your current experience level is ${experienceLevel}, good for you! \n Climb on!`}
            </p>
          </span> <br />
          <div className='footercontainer'>
            <h5> First comes Alpha, then comes Beta </h5>
            <h6> An App by Lillia</h6>
          </div>


        </div>


  );
}

export default Home;
