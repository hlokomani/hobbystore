'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

const Header = () => {
    const router = useRouter();
    const cart = useSelector(state => state.cart.cart);
    
    // Set active link based on the current route
    const [activeLink, setActiveLink] = useState(router.pathname);

    // Update activeLink on route change
    useEffect(() => {
        setActiveLink(router.pathname);
    }, [router.pathname]);

    const handleLogout = () => {
        router.push('/');
    };

    const handleCart = () => {
        router.push('/checkout');
    };

    const menuItems = [
        { name: 'Home', href: '/products' },
        { name: 'Acoustic Guitars', href: '/products' },
        { name: 'Electric Guitars', href: '/products' },
        { name: 'Bass Guitars', href: '/products' },
        { name: 'Ukuleles', href: '/products' }
    ];

    return (
        <header className='flex bg-lighter_brown border-b py-4 sm:px-8 px-6 font-[sans-serif] min-h-[80px] tracking-wide relative z-50'>
            <div className='flex flex-wrap items-center lg:gap-y-2 gap-4 w-full'>
                <Link href="/products" className="text-browner font-bold text-3xl mr-5">
                    HarmonyHub
                </Link>

                <div id="collapseMenu" className='lg:ml-10 max-lg:hidden lg:!block'>
                    <ul className='lg:flex lg:gap-x-3 max-lg:space-y-3 z-50 ml-5'>
                        {menuItems.map((item) => (
                            <li key={item.name} className='max-lg:border-b max-lg:py-3 px-3'>
                                <Link
                                    href={item.href}
                                    onClick={() => setActiveLink(item.name)}
                                    className={`${activeLink === item.name ? 'text-browner font-bold' : 'text-[#333]'} hover:text-browner text-[15px] block font-semibold`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex gap-x-6 gap-y-4 ml-auto">
                    <div className='flex items-center space-x-8'>
                        <li className='max-lg:border-b max-lg:py-3 px-3'><a href='/seller'
                            className='text-[#333] hover:text-browner text-[15px] block font-semibold'>Dashboard</a>
                        </li>
                        <button onClick={handleCart} className="relative">
                            View Cart 
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className="cursor-pointer fill-[#333] inline"
                            viewBox="0 0 512 512">
                            <path
                                d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                                data-original="#000000"></path>
                            </svg>
                            <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">{`${cart.length}`}</span>
                        </button>
                
                        <button id="toggleOpen" className='lg:hidden'>
                            <svg className="w-7 h-7" fill="#333" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"></path>
                            </svg>
                        </button>
                        <button
                            onClick={handleLogout}
                            className='px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-browner bg-browner transition-all ease-in-out duration-300 hover:bg-dark_brown'>Logout
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
