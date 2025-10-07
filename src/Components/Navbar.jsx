import React from 'react';
import logoImg from '../assets/assets/logo.png'
import githubLogo from '../assets/assets/icons8-github-logo-30.png'
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        
        
      <NavLink  to='/' className="m-2">Home</NavLink>
      <NavLink to='/Apps' className="m-2">Apps</NavLink>
      <NavLink to='/Installation' className="m-2">Installation</NavLink>
        
        
        
      </ul>
    </div>
    <NavLink>
      <div className='flex justify-center gap-1.5 cursor-pointer ml-5'>
    <img className='w-10 h-10' src={logoImg} alt="" />
    <a className="text-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent mt-1">HERO.IO</a>
    </div>
    </NavLink>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <div className=''>
      <NavLink  to='/' className="m-10">Home</NavLink>
      <NavLink to='/Apps' className="m-10">Apps</NavLink>
      <NavLink to='/Installation' className="m-10">Installation</NavLink>
        
    </div>
  </div>
  <div className="navbar-end mr-8 ">
  <button className="flex items-center gap-2 rounded bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-4 py-2 text-white hover:scale-108 hover:shadow-lg hover:opacity-100 cursor-pointer ">
    <img src={githubLogo} alt="GitHub Logo" className="w-5 h-5" />
    <span>Contribute</span>
  </button>
</div>

</div>
  );
};

export default Navbar;