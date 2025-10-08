import React from 'react';
import google from '../assets/assets/icons8-google-play-store-48.png'
import appStor from '../assets/assets/icons8-app-store-64.png'
import mobail from '../assets/assets/hero.png'
import dowlodImg from '../assets/assets/icon-downloads.png'
import star from '../assets/assets/icon-ratings.png'
import damoimg from '../assets/assets/demo-app (5).webp'


import { Link, useLoaderData } from 'react-router';
import useProducts from '../hooks/useCards';



const Home = () => {
const {products, loading, error} = useProducts()

const Cardss = useLoaderData()

const data = useProducts()
console.log(data);

const featuredCards = Cardss.slice(0 ,8)
console.log(Cardss);
  return (
    

    <section className='inter flex flex-col items-center  min-h-screen p-5 text-center mt-15'>
    {/* // section 1 play and app stor */}

    <div>
<h1 className='text-4xl md:text-7xl font-bold'>We Build <br /> <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h1>
    <p className=' md:text-[20px] font-normal text-gray-500 mt-3'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br className='hidden lg:block' />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
    <div>
      <div className='flex gap-8 mt-5 justify-center'>

        <div className='p-5 font-bold bg-blue-50 rounded-2xl hover:scale-105 hover:shadow-lg hover:opacity-90 cursor-pointer'>
          <a href="https://play.google.com/store/games?hl=en"
            target="_blank"
            className='flex'
          >
        <img src={google} alt="google" className='w-8 h-8'/>
        <span className='ml-2 mt-0.5 '>Google Play</span>
        </a>
        </div>

        <div className='p-5 font-bold bg-blue-50 rounded-2xl hover:scale-105 hover:shadow-lg hover:opacity-90 cursor-pointer'>
      <a href="https://www.apple.com/app-store/"
            target="_blank"
            className='flex'
          
          
          >
        <img src={appStor} alt="AppStor" className='w-8 h-8'/>
        <span className='ml-2 mt-0.5'>App Store</span>
        </a>
        </div>
        
      </div>
    
    
    </div>
    </div>

    {/* section -2 mobail img */}

    <div className='mt-8'>
      <img src={mobail} alt="" />
  
    </div>
      <div className='min-w-screen bg-gradient-to-r from-[#632EE3] to-[#9F62F2] '>
          <h2 className='text-fuchsia-50 text-2xl md:text-4xl mt-5 md:mt-10 font-bold capitalize'>Trusted by Millions, Built for You</h2>
          <div className='text-fuchsia-50 flex gap-10 md:gap-70 justify-center mt-5 mb-5 md:mb-15 capitalize'>
            <div>
              <p className='font-light text-[8px] md:text-[12px]'>Total Downloads</p>
              <h1 className='text-2xl md:text-5xl font-bold mt-2'>29.6M</h1>
              <p  className='font-light text-[8px] md:text-[12px] mt-2 '>21% more than last month</p>
            </div>
            <div>
              <p className='font-light text-[8px] md:text-[12px]'>Total Reviews</p>
              <h1 className='text-2xl md:text-5xl font-bold mt-2'>906K</h1>
              <p className='font-light text-[8px] md:text-[12px] mt-2 '>46% more than last month</p>
            </div>
            <div>
              <p className='font-light text-[8px] md:text-[12px]'>Active Apps</p>
              <h1 className='text-2xl md:text-5xl font-bold mt-2'>132+</h1>
              <p className='font-light text-[8px] md:text-[12px] mt-2 '>31 more will Launch</p>
            </div>
          </div>
      </div>


      {/* section 3 card  */}
      <div>
        {/* trending text */}
        <div className='items-center mt-15'>
          <h2 className='text-3xl font-black'>Trending Apps</h2>
          <p className='text-[20px] mt-2 font-light text-gray-400'>Explore All Trending Apps on the Market developed by us</p>
        </div>

        {/* json card */}

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-15 mt-10">
  {Cardss && featuredCards.map((card, i) => (
    <div
      key={i}
      className="p-5 rounded-3xl hover:scale-105 hover:shadow-lg hover:opacity-90 cursor-pointer bg-white transition-transform duration-300"
    >
      <img src={card.image} alt="" className="rounded-2xl w-50 h-48 object-cover"/>
      <h2 className="mt-3 text-2xl font-semibold">{card.title}</h2>
      <div className="flex justify-between mt-4">
        <div className="flex gap-1 items-center">
          <img src={dowlodImg} alt="downloads" className="w-5 h-5"/>
          <p className="-mt-0.5">{card.downloads}</p>
        </div>
        <div className="flex gap-1 items-center">
          <img src={star} alt="rating" className="w-5 h-5"/>
          <p>{card.ratingAvg}</p>
        </div>
      </div>
          
    </div>
    
  ))}
</div>
  <div className='mt-15 mb-10'>
  <Link to="/Apps"  className="items-center rounded-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-6 py-3 text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:opacity-90 cursor-pointer">
  Show All
  </Link>
  </div>

        </div>
      </div>


    </section>
    
  );
};

export default Home;                  