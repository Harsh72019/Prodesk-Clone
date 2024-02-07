import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <>
    <div className='home'>
      <video className='video-bg' autoPlay muted loop>
        <source src={require('../../assets/home-bg2.mp4')} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='intro'>
        <h1 className='heading'>WELCOME TO PRODESK IT</h1>
        <div className='sub-heading'>Software Development & Engineering Manpower Outsourcing Services</div>
        <button className='btn'>Find out more</button>
        <p className='num'>8851407750</p>
      </div>
    </div>
    
      </>
  );
};

export default Home;
