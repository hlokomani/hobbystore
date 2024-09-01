'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

const Header = () => {
    const router = useRouter();
    const cart = useSelector(state => state.cart.cart);

    const handleLogout = () => {
        router.push('/login');
    };

    return (
        <header className='flex bg-lighter_brown border-b py-4 sm:px-8 px-6 font-[sans-serif] min-h-[80px] tracking-wide relative z-50'>
            <div className='flex flex-wrap items-center lg:gap-y-2 gap-4 w-full'>
            <Link href="/products" className="text-browner font-bold text-3xl mr-5">
                HarmonyHub
            </Link>
        
            <div id="collapseMenu"
                className='lg:ml-10 max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
                <button id="toggleClose" className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
                        <path
                        d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                        data-original="#000000"></path>
                        <path
                        d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                        data-original="#000000"></path>
                    </svg>
                </button>
        
                <ul
                    className='lg:flex lg:gap-x-3 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 ml-5'>
                    <li className='max-lg:border-b max-lg:py-3 px-3'><a href='/products'
                        className='text-browner hover:text-browner text-[15px] block font-semibold'>Acoustic Guitars</a></li>
                    <li className='max-lg:border-b max-lg:py-3 px-3'><a href='/products'
                        className='text-[#333] hover:text-browner text-[15px] block font-semibold'>Electric Guitars</a></li>
                    <li className='max-lg:border-b max-lg:py-3 px-3'><a href='/products'
                        className='text-[#333] hover:text-browner text-[15px] block font-semibold'>Bas Guitars</a></li>
                    <li className='max-lg:border-b max-lg:py-3 px-3'><a href='/products'
                        className='text-[#333] hover:text-browner text-[15px] block font-semibold'>Ukuleles</a></li>
                </ul>
            </div>
        
            <div className="flex gap-x-6 gap-y-4 ml-auto">
                <div className='flex items-center space-x-8'>
                    <span className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className="cursor-pointer fill-[#333] inline"
                        viewBox="0 0 512 512">
                        <path
                            d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                            data-original="#000000"></path>
                        </svg>
                        <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">{`${cart.length}`}</span>
                    </span>
            
                    <button id="toggleOpen" className='lg:hidden'>
                        <svg className="w-7 h-7" fill="#333" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"></path>
                        </svg>
                    </button>
                    <button
                        onClick={handleLogout}
                        className='px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-browner bg-browner transition-all ease-in-out duration-300 hover:bg-transparent hover:text-dark_brown'>Logout
                    </button>
                </div>
            </div>
            </div>
        </header>
    );
};

export default Header;