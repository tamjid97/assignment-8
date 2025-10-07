import React from 'react';
import google from '../assets/assets/icons8-google-play-store-48.png'
import appStor from '../assets/assets/icons8-app-store-64.png'

const Home = () => {
  
  return (
    // section 1 play and app stor
    <section>
    <h1>We Build <span>Productive</span> Apps</h1>
    <p>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
    <div>
      <div className='flex '>

        <div className='border p-5'>
          <a href="https://play.google.com/store/games?hl=en"
            target="_blank"
            className='flex'
          >
        <img src={google} alt="google" className='w-8 h-8'/>
        <span>Google Play</span>
        </a>
        </div>

        <div className='border p-5'>
      <a href="https://www.apple.com/app-store/"
            target="_blank"
            className='flex'
          
          
          >
        <img src={appStor} alt="AppStor" className='w-8 h-8'/>
        <span>App Store</span>
        </a>
        </div>
        
      </div>
    
    
    </div>
    </section>
  );
};

export default Home;