import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import useProducts from '../hooks/useCards';
import dow from '../assets/assets/icon-downloads.png'
import rt from '../assets/assets/icon-ratings.png'
import lk from '../assets/assets/icon-review.png'

import { ToastContainer, toast } from 'react-toastify'
import { Bar, CartesianGrid, ComposedChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Ratings = () => {
    const { id } = useParams()
    const { products, loading } = useProducts()
    const product = products.find(p => String(p.id) === id)

    const [isInstalled, setIsInstalled] = useState(false);

    useEffect(() => {
        const existingList = JSON.parse(localStorage.getItem('wishlist'));
        if (existingList) {
            const alreadyInstalled = existingList.some(p => String(p.id) === id);
            if (alreadyInstalled) {
                setIsInstalled(true); 
            }
        }
    }, [id]); 

    if (loading) return <p><span className="loading loading-dots loading-xl"></span></p>
    
    if (!product) return <p>Product not found!</p>

    const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = product

    
    const handleAddTowishList = () => {
        
        
        if (isInstalled) {
        
            toast('✅ You already have one installed 🫵');
            return; 
        }

        const existingList = JSON.parse(localStorage.getItem('wishlist'))
        let updatedList = []

        
        if (existingList) {
            const isDuplicate = existingList.some(p => p.id === product.id)
            if (isDuplicate) {
                
                toast('✅ You already have one installed 🫵');
                setIsInstalled(true); 
                return;
            }
            updatedList = [...existingList, product]
        } else {
            updatedList.push(product)
        }

        
        localStorage.setItem('wishlist', JSON.stringify(updatedList))
        
        
        setIsInstalled(true);
        toast('What fun! You successfully installed it.🤩'); 
    }
    

    return (
        <div>
            {/* part-1 */}
            <div className='items-center md:flex justify-center gap-20 mt-25 mb-20'>
                <div>
                    <img src={image} alt="" className="rounded-2xl w-50 md:w-80 object-cover ml-25" />
                </div>
                <div>
                    <div>
                        <h2 className='m-5 text-xl md:text-4xl font-semibold'>{title}:{description}</h2>
                        <p className='text-gray-700 m-5 md:mt-2 mb-3'>Developed by <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>productive.io</span></p>
                        <hr />
                    </div>

                    <div className='flex mb-10 gap-10 m-8'>
                        <div>
                            <img src={dow} alt="" className='w-5 h-5  md:w-8 md:h-8 ml-5' />
                            <p className='text-gray-500'>Downloads</p>
                            <h2 className='text-2xl font-bold ml-4'>{downloads}M</h2>
                        </div>
                        <div>
                            <img src={rt} alt="" className='w-5 h-5 md:w-8 md:h-8 ml-9' />
                            <p className='text-gray-500 text-[15px]'>Average Ratings</p>
                            <h2 className='text-2xl font-bold ml-9'>{ratingAvg}</h2>
                        </div>
                        <div>
                            <img src={lk} alt="" className='w-5 h-5 md:w-8 md:h-8 ml-8' />
                            <p className='text-gray-500'>Total Reviews</p>
                            <h2 className='text-2xl font-bold ml-6'>{reviews}K</h2>
                        </div>
                    </div>
                    
                    <Link
                        onClick={handleAddTowishList}
                        className={`p-3 rounded-xl text-amber-50 font-bold ml-28 md:ml-0 transition-all duration-300
                            ${isInstalled
                                ? 'bg-cyan-400 cursor-not-allowed' 
                                : 'bg-[#00d390] hover:shadow-lg hover:opacity-120 hover:bg-gradient-to-r from-[#2ee3b3] to-[#62f2da]' 
                            }`}
                    >
                        {isInstalled ? 'Installed!' : `Install Now (${size} MB)`}
                    </Link>
                </div>
            </div>
            
<ToastContainer />
            <div>
              {/* chart */}
            <div className='space-y-3'>
            <h3 className='text-4xl ml-25 font-semibold p-5'>Ratings</h3>
            <div className='mb-25 rounded-xl p-4 h-80'>
                <ResponsiveContainer width="100%" height={400}>
                            <ComposedChart
                                layout="vertical"
                                data={ratings}
                                margin={{
                                    top: 20,
                                    right: 20,
                                    bottom: 20,
                                    left: 40,
                                }}
                            >
                                <CartesianGrid />
                                <XAxis type="number" />
                                <YAxis
                                    dataKey="name"
                                    type="category"
                                    tick={{ fontSize: 20 }}
                                />
                                <Tooltip />
                                <Legend />

                                <Bar dataKey="count" barSize={20} fill="#00d390" />

                            </ComposedChart>
                        </ResponsiveContainer>

    </div>
    </div>

<div>
<h1 className='text-4xl ml-8 font-semibold p-5'>Description</h1>
<div className='p-10 text-xl text-gray-600'>
<p>This productivity app is designed for lifelong learners who want to capture, organize, and retain knowledge efficiently. It combines reading, note-taking, and spaced repetition to make learning a structured and enjoyable process. You can save articles, videos, and resources from across the web into a clean, distraction-free library. Built-in highlighting and annotation tools let you capture key insights as you read. Notes are automatically linked to the original source, keeping context intact.</p>
<p className='mt-5'>What makes the app powerful is its integration of spaced repetition algorithms. Important notes can be turned into flashcards, and the app reminds you to review them at scientifically optimized intervals, ensuring long-term retention. This makes it ideal for students, professionals preparing for certifications, or anyone passionate about continuous learning. A personal knowledge graph visually connects related ideas, helping you see the bigger picture.</p>
<p className='mt-5'>Collaboration features let you share resources or co-create study libraries with peers. Offline mode ensures you can study anytime, anywhere. With advanced search and categorization, your personal knowledge base grows without ever becoming cluttered. Insights and progress reports show how much you’ve learned and how consistent you’ve been.</p>

<p className='mt-5'>By combining resource organization, active recall, and collaboration, this app turns scattered learning into a structured journey. Whether you’re mastering a language, keeping up with industry research, or exploring personal interests, it becomes your personal learning companion. It’s not just about consuming information—it’s about retaining, applying, and growing your knowledge over time. This app empowers you to be a smarter, more capable version of yourself every single day.</p>
</div>

</div>

            </div>
        </div>
    );
};

export default Ratings;