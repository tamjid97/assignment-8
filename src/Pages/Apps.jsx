
import useProducts from '../hooks/useCards';
import dowlodImg from '../assets/assets/icon-downloads.png';
import star from '../assets/assets/icon-ratings.png';
import { useState } from 'react';
import { Link } from 'react-router';

const Apps = () => {
const { products } = useProducts(); 

const [search, setSearch] = useState('')
const term = search.trim().toLocaleLowerCase()

const searchedProducts = term 
  ? products.filter(card => 
    card.title.toLocaleLowerCase().includes(term)
    )
  : products
    
console.log(searchedProducts);



  return (


    <div className=''>
<div className="text-center mt-20 mb-10">
  <h1 className="text-5xl md:text-6xl font-bold">Our All Applications</h1>
  <p className="text-lg md:text-xl text-gray-500 mt-3">
    Explore All Apps on the Market developed by us. We code for Millions.
  </p>
</div>

<div className='flex justify-between mx-2.5 md:mx-40'>
<div>
  <h1 className='text-xl md:text-3xl font-bold'>
  ({products.length})Apps Found
</h1>
</div>

<div>
  <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input
  value={search}
    onChange={(e)=> setSearch(e.target.value)}
    type="search" required placeholder="Search" />
</label>
</div>
</div>


<div>

</div>

        <div className="mt-10 min-h-screen ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ml-20 mb-20 md:ml-36">

        {searchedProducts.map((card, i) => (
          <div
            key={i}
            className="p-6 w-60 rounded-3xl hover:scale-105 hover:shadow-lg hover:opacity-90 cursor-pointer bg-white transition-transform duration-300"
          >
            <Link to={`/Ratings/${card.id}`}>
            <img src={card.image} alt={card.title} className="rounded-2xl w-50 h-48 " />
            <h2 className="mt-3 text-2xl font-semibold">{card.title}</h2>
            </Link>
            
            <div className="flex justify-between mt-4">
              <div className="flex gap-1 items-center">
                <img src={dowlodImg} alt="downloads" className="w-5 h-5" />
                <p className="-mt-0.5">{card.downloads}</p>
              </div>
              <div className="flex gap-1 items-center">
                <img src={star} alt="rating" className="w-5 h-5" />
                <p>{card.ratingAvg}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  
  );
};

export default Apps;
