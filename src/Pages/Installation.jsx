import React, { useEffect, useState } from 'react';
import dw from '../assets/assets/icon-downloads.png'
import rt from '../assets/assets/icon-ratings.png'
import { ToastContainer, toast } from 'react-toastify'

const Installation = () => {
  const [wishlist, setWishlist] = useState([])
  const [sortOrder, setSortOrder] = useState('none')
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem('wishlist'))
  
if (savedList) setWishlist(savedList)


  }, [])


const sortedItem = (
  ()=>{
if(sortOrder === 'size-asc'){
  return [...wishlist].sort((a, b)=> a.size - b.size)
}else if(sortOrder === 'size-desc'){
  return [...wishlist].sort((a, b)=> b.size - a.size)
}else {
  return wishlist
}
}
) ()






const handelRemove = (id)=>{
  toast('😔The app has been deleted.🔥')
const existingList = JSON.parse(localStorage.getItem('wishlist'))
let updatedList = existingList.filter(p=> p.id !==id)
// for ui updet
setWishlist(updatedList)
    localStorage.setItem('wishlist', JSON.stringify(updatedList))
}



  return (
    <div>
    <div className="text-center mt-20 mb-10">
  <h1 className="text-4xl md:text-6xl font-bold">Your Installed Apps</h1>
  <p className="text-lg text-[15px] md:text-[18px] text-gray-500 mt-5">
    Explore All Trending Apps on the Market developed by us
  </p>
</div>


{/* card abba*/}
<div className='p-10'>
{/* langth */}

<div className='flex justify-between mb-10'>
  <div className='text-2xl font-bold'>
  <h1>{wishlist.length} Apps Found</h1>
  </div>

<div>
  <label className='from-control w-full max-w-xs'>
    <select
    className='select select-bordered'
    value={sortOrder}
    onChange={e => setSortOrder(e.target.value)}

  >
    <option value="none">Sort By Size</option>
    <option value="size-asc">Low-&gt;High</option>
    <option value="size-desc">High-&gt;Low</option>

  </select>

  </label>
</div>

</div>

{/* main card */}

<div className='space-y-3 '>
{
sortedItem.map(p=> 

<div className='flex justify-between hover:shadow-lg hover:opacity-90 cursor-pointer bg-white transition-transform duration-300 p-5 rounded-2xl '>
<div className='flex gap-5'>
  <div>
    <img src={p.image} alt="" className='w-20  md:w-20 md:h-20 rounded-2xl'/>
  </div>
  <div className=''>
    <h2 className='text-[10px] md:text-2xl font-semibold'>{p.title}: {p.description}</h2>


    <div className='flex gap-5 mt-3'>

      <div className='flex'>
        <div><img src={dw} alt="" className='w-3 h-3 md:w-5 md:h-5'/></div>
        <div className='ml-1  md:ml-1.5 '><p className='text-[#00d390] text-[12px] md:text-[18px]'>{p.downloads}M</p></div>
      </div>



      <div className='flex'>
            <div>
        <img src={rt} alt="" className='w-3 h-3 md:w-5 md:h-5'/>
      </div>
      <div className='ml-1  md:ml-1.5 '>
        <p className='text-[#ff8811] text-[12px] md:text-[18px]'>{p.ratingAvg}</p>
      </div>
      </div>
    
    <div>
      <p className='text-[12px] md:text-[18px]'>{p.size}MB</p>
    </div>

    </div>
  </div>
</div>


{/* button */}

<div>
  <button onClick={() => handelRemove(p.id)} className='bg-[#00d390] text-amber-50 font-bold text-[12px] md:text-xl p-1 md:p-3 rounded-xl hover:scale-103 hover:shadow-lg hover:opacity-90 cursor-pointer  transition-transform duration-300'>Uninstall</button>
</div>

</div>


) }
</div>





    </div>
    <ToastContainer />

    </div>
  );
};

export default Installation;