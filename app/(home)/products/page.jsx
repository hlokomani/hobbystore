'use client';
import React from 'react';
import { addToCart } from '@/store/actions/addToCartAction';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import DropDownSort from '@/components/DropDown/DropDownSort';
import DropDownFilter from '@/components/DropDown/DropDownFilter';
import DropDownCategory from '@/components/DropDown/DropDownCategory';
import SearchBar from '@/components/Search/SearchBar';
import Favourite from '@/components/Favourite';
import { useSelector, useDispatch } from 'react-redux';

const ProductPage = () => {
    const filteredGuitars = useSelector(state => state.filter.filteredGuitars);
    const dispatch = useDispatch();

    const handleAddToCart = (guitarId) => {
        dispatch(addToCart(guitarId));
    };

    return (
        <>
            <Header />
            <section className="bg-lightest_brown py-8 antialiased dark:bg-gray-900 md:py-12 min-h-screen">
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
                        <div>
                            <nav className="flex" aria-label="Breadcrumb">
                                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                                    <li className="inline-flex items-center">
                                        <a href="/products" className="inline-flex items-center text-sm font-medium text-dark_brown hover:text-browner dark:text-gray-400 dark:hover:text-white">
                                            <svg className="me-2.5 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                            </svg>
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <div className="flex items-center">
                                            <svg className="h-5 w-5 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                                            </svg>
                                            <a href="/products" className="ms-1 text-sm font-medium text-dark_brown hover:text-browner dark:text-gray-400 dark:hover:text-white md:ms-2">Guitars</a>
                                        </div>
                                    </li>
                                </ol>
                            </nav>
                            <h2 className="mt-3 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Guitars</h2>
                        </div>
                        <div className="flex items-center space-x-4">
                            <SearchBar />
                            <DropDownFilter />
                            <DropDownSort />
                        </div>
                    </div>
                    <div className="mb-4">
                            {filteredGuitars.slice(0, 8).map((guitar) => (
                                <div
                                    key={guitar.id}
                                    className="m-5 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 hover:shadow-md transition duration-300"
                                >
                                    <div className='flex'>
                                        <div className="h-56 w-1/2">
                                            <a href={`/product/${guitar.id}`}>
                                                <img className="mx-auto h-full dark:hidden" src={guitar.image} alt={guitar.name} />
                                                <img className="mx-auto hidden h-full dark:block" src={guitar.image} alt={guitar.name} />
                                            </a>
                                        </div>
                                        <div className="pt-6 w-1/3">
                                            <a href={`/product/${guitar.id}`} className="text-[30px] font-semibold leading-tight text-gray-900 hover:underline dark:text-white">
                                                {guitar.name}
                                            </a>
                                            <div className="m-2 flex items-center gap-2">
                                                <div className="flex items-center">
                                                    {[...Array(Math.floor(guitar.rating))].map((_, i) => (
                                                        <svg key={i} className="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                                        </svg>
                                                    ))}
                                                </div>
                                                <p className="text-sm font-medium text-gray-900 dark:text-white">{guitar.rating.toFixed(1)}</p>
                                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">({guitar.reviews})</p>
                                            </div>
                                            <div className="mb-4 flex items-center justify-between gap-4">
                                                <span className="me-2 rounded bg-lighter_brown px-2.5 py-0.5 text-xs font-medium text-dark_brown dark:bg-dark_brown dark:text-light_brown">{guitar.special}</span>
                                                <div className="flex items-center justify-end gap-1">
                                                    <button type="button" data-tooltip-target="tooltip-quick-look" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                                        <span className="sr-only">Quick look</span>
                                                        <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" strokeWidth="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                                                            <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                        </svg>
                                                    </button>
                                                    <Favourite />
                                                </div>
                                            </div>
                                            <div className="mt-4 flex items-center justify-between gap-4">
                                                <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">{guitar.price}</p>
                                                <button 
                                                    onClick={() => handleAddToCart(guitar.id)} 
                                                    className="inline-flex items-center rounded-lg bg-browner px-5 py-2.5 text-sm font-medium text-white hover:bg-dark_brown focus:outline-none focus:ring-4 focus:ring-browner dark:bg-browner dark:hover:bg-browner dark:focus:ring-browner"
                                                >
                                                    <svg className="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
                                                    </svg>
                                                    Add to cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    <div/>
                    { filteredGuitars.length > 0 ?
                        (
                            <div className="w-full text-center">
                                <button type="button" className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-lighter_brown hover:text-dark_brown focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Show more</button>
                            </div>
                        ) : (<></>)
                    }
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ProductPage;