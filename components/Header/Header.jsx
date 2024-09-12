import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

const Header = () => {
    const router = useRouter();
    const cart = useSelector(state => state.cart.cart);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleLogout = () => {
        router.push('/login');
    };

    return (
        <header className='flex bg-lighter_brown border-b py-4 sm:px-8 px-6 font-[sans-serif] min-h-[80px] tracking-wide relative z-50'>
            <div className='flex items-center justify-between w-full'>
                <div className='flex items-center'>
                    <Link href="/products" className="text-browner font-bold text-3xl mr-5">
                        HarmonyHub
                    </Link>
                    <nav className='hidden md:block ml-6'>
                        <ul className='flex gap-x-6'>
                            <li><Link href='/products'
                                className='text-browner hover:text-dark_brown text-[15px] font-semibold'>Home</Link></li>
                            <li><Link href='#'
                                className='text-browner hover:text-dark_brown text-[15px] font-semibold'>About</Link></li>
                            <li><Link href='#'
                                className='text-browner hover:text-dark_brown text-[15px] font-semibold'>Contact</Link></li>
                        </ul>
                    </nav>
                </div>

                <div className='flex items-center space-x-6'>
                    <Link href='/seller'
                        className='border border-browner text-browner px-4 py-2 rounded-full hover:bg-browner hover:text-white transition-colors duration-300 text-[15px] font-semibold'>
                        Seller Dashboard
                    </Link>

                    <Link href="/cart" className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="cursor-pointer fill-browner"
                        viewBox="0 0 512 512">
                            <path d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0" />
                        </svg>
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">{cart.length}</span>
                    </Link>

                    <div className="relative">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center space-x-2 focus:outline-none"
                        >
                            <img
                                src="/assets/images/thispersondoesnotexist.jpg"
                                alt="User Avatar"
                                className="w-8 h-8 rounded-full object-cover"
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-browner" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                                <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
                                <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</Link>
                                <button
                                    onClick={handleLogout}
                                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;