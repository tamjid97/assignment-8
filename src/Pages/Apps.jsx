import useProducts from '../hooks/useCards';
import dowlodImg from '../assets/assets/icon-downloads.png';
import star from '../assets/assets/icon-ratings.png';
import { useState } from 'react';
// ✅ Link কে react-router-dom থেকে ইমপোর্ট করা হয়েছে
import { Link } from 'react-router-dom'; 

const Apps = () => {
    const { products } = useProducts(); 

    const [search, setSearch] = useState('')
    const term = search.trim().toLocaleLowerCase()

    const searchedProducts = term 
        ? products.filter(card => 
            card.title.toLocaleLowerCase().includes(term)
          )
        : products
        
    const isProductFound = searchedProducts.length > 0;

    // ✅ নতুন ফাংশন: সার্চ ইনপুট রিসেট করে সব অ্যাপ দেখাবে
    const handleShowAll = () => {
        setSearch('');
    };

    return (
        <div className=''>
            {/* Header Section */}
            <div className="text-center mt-20 mb-10">
                <h1 className="text-5xl md:text-6xl font-bold">Our All Applications</h1>
                <p className="text-lg md:text-xl text-gray-500 mt-3">
                    Explore All Apps on the Market developed by us. We code for Millions.
                </p>
            </div>

            {/* Search and Count Section */}
            <div className='flex justify-between mx-2.5 md:mx-40'>
                <div>
                    <h1 className='text-xl md:text-3xl font-bold'>
                        ({searchedProducts.length}) Apps Found
                    </h1>
                </div>

                <div>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
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

            {/* Apps Grid/No Apps Found Section */}
            <div className="mt-10 min-h-screen">
                
                {/* ⛔ যদি কোনো অ্যাপ খুঁজে না পাওয়া যায় এবং সার্চ টার্ম থাকে */}
                {!isProductFound && term !== '' ? (
                    <div className="flex flex-col items-center justify-center text-center my-20 min-h-[50vh]">
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-700 mb-8">
                            No Apps Found
                        </h2>
                        {/* "Show All Apps" বাটন যোগ করা হয়েছে */}
                        <button
                            onClick={handleShowAll}
                            className="rounded-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-8 py-4 text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:opacity-90 cursor-pointer"
                        >
                            Show All Apps
                        </button>
                    </div>
                ) : (
                    // ✅ যদি অ্যাপ খুঁজে পাওয়া যায়: গ্রিড দেখাও
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ml-20 mb-20 md:ml-36">

                        {searchedProducts.map((card, i) => (
                            // ✅ সম্পূর্ণ কার্ডটিকে Link দিয়ে র্যাপ করা হয়েছে
                            <Link
                                key={i}
                                to={`/Ratings/${card.id || card.title}`}
                                className="block p-6 w-60 rounded-3xl hover:scale-105 hover:shadow-lg hover:opacity-90 cursor-pointer bg-white transition-transform duration-300"
                            >
                                {/* Card Content */}
                                <img src={card.image} alt={card.title} className="rounded-2xl w-50 h-48 " />
                                <h2 className="mt-3 text-2xl font-semibold">{card.title}</h2>
                                
                                <div className="flex justify-between mt-4">
                                    <div className="flex gap-1 items-center bg-[#f1f5e8] rounded p-0.5">
                                        <img src={dowlodImg} alt="downloads" className="w-5 h-5" />
                                        <p className="-mt-0.5 text-[#13d330]">{card.downloads}M</p>
                                    </div>
                                    <div className="flex gap-1 items-center bg-[#fff0e1] rounded p-0.5">
                                        <img src={star} alt="rating" className="w-5 h-5" />
                                        <p className='text-[#ff8811]'>{card.ratingAvg}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Apps;