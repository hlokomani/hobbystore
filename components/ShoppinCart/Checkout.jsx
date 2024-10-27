'use client';
import React from 'react';
import { addToCart } from '@/store/actions/addToCartAction';
import CheckoutPopup from './CheckoutPopup';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';

const Checkout = () => {
    const router = useRouter();
    const cart = useSelector(state => state.cart.cart);
    const dispatch = useDispatch();

    const handleAddToCart = (guitarId) => {
        dispatch(addToCart(guitarId));
    };

    // Calculate order summary values
    const originalPrice = cart.reduce((total, item) => total + parseFloat(item?.price.replace("R", "").replace(",", "")), 0);
    const discountedPrice = cart.reduce((total, item) => total + parseFloat(item?.discountedPrice.replace("R", "").replace(",", "")), 0);
    const savings = originalPrice - discountedPrice;
    const storePickup = 99;
    const tax = parseFloat((0.14 * discountedPrice).toFixed(2));
    const total = discountedPrice + storePickup + tax;

    const filteredGuitars = useSelector(state => state.filter.filteredGuitars);

    const guitarsNotInCart = filteredGuitars.filter(
        guitar => !cart.some(cartItem => cartItem?.id === guitar.id)
    );

    return (
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>

                <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                    <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                        <div className="space-y-6">
                            {cart && cart.length > 0 ? (
                                cart.map((item) => (
                                    <div key={item?.id} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                                        <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                            <a href={`/product/${item?.id}`} className="shrink-0 md:order-1">
                                                <img className="h-20 w-20" src={item?.image} alt="Item Image" />
                                            </a>
                                            <div className="flex items-center justify-between md:order-3 md:justify-end">
                                                <div className="text-end md:order-4 md:w-32">
                                                    <p className="text-base font-bold text-gray-900 dark:text-white">{item?.discountedPrice}</p>
                                                </div>
                                            </div>
                                            <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                                <h1 href={`/product/${item?.id}`} className="text-base font-medium text-gray-900 hover:underline dark:text-white">{item?.name}</h1>
                                                <a href={`/product/${item?.id}`} className="text-base font-small text-gray-600 hover:underline dark:text-white">{item?.title}</a>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>When you have added items to cart, they shall appear here</p>
                            )}
                        </div>

                        <div className="hidden xl:mt-8 xl:block">
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">People also bought</h3>
                            <div className="mt-6 grid grid-cols-3 gap-4 sm:mt-8">
                                {guitarsNotInCart.slice(0, 3).map((item) => (
                                    <div key={item?.id} className="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                                        <a href={`/product/${item?.id}`} className="overflow-hidden rounded">
                                            <img className="mx-auto h-44 w-44" src={item?.image} alt="Item Image" />
                                        </a>
                                        <div>
                                            <a href={`/product/${item?.id}`} className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">{item?.name}</a>
                                            <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">{item?.title}.</p>
                                        </div>
                                        <div>
                                            <p className="text-lg font-bold text-gray-900 dark:text-white">
                                            <span className="line-through"> {item?.price} </span>
                                            </p>
                                            <p className="text-lg font-bold leading-tight text-red-600 dark:text-red-500">{item?.discountedPrice}</p>
                                        </div>
                                        <div className="mt-6 flex items-center gap-2.5">
                                            <button
                                                onClick={() => handleAddToCart(item.id)}
                                                type="button" className="inline-flex w-full items-center justify-center rounded-lg bg-browner px-5 py-2.5 text-sm font-medium  text-white hover:bg-dark_brown focus:outline-none focus:ring-4 focus:ring-browner dark:bg-browner dark:hover:bg-browner dark:focus:ring-browner"
                                            >
                                                <svg className="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4" />
                                                </svg>
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {cart && cart.length > 0  ? (
                        <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                                <p className="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt>
                                            <dd className="text-base font-medium text-gray-900 dark:text-white">{`R${originalPrice.toFixed(2)}`}</dd>
                                        </dl>

                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                                            <dd className="text-base font-medium text-green-600">{`-R${savings.toFixed(2)}`}</dd>
                                        </dl>

                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Store Pickup</dt>
                                            <dd className="text-base font-medium text-gray-900 dark:text-white">R{storePickup}</dd>
                                        </dl>

                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                                            <dd className="text-base font-medium text-gray-900 dark:text-white">R{tax}</dd>
                                        </dl>
                                    </div>

                                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                                        <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                                        <dd className="text-base font-bold text-gray-900 dark:text-white">{`R${total.toFixed(2)}`}</dd>
                                    </dl>
                                </div>

                                <CheckoutPopup />

                                <div className="flex items-center justify-center gap-2">
                                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
                                    <a href="/products" title="" className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
                                        Continue Shopping
                                        <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                                <form className="space-y-4">
                                    <div>
                                        <label for="voucher" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Do you have a voucher or gift card? </label>
                                        <input type="text" id="voucher" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="" required />
                                    </div>
                                    <button type="submit" className="flex w-full items-center justify-center rounded-lg bg-browner px-5 py-2.5 text-sm font-medium text-white hover:bg-dark_brown focus:outline-none focus:ring-4 focus:ring-browner dark:bg-browner dark:hover:bg-browner dark:focus:ring-browner">Apply Code</button>
                                </form>
                            </div>
                        </div>
                    ):(
                        <p></p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Checkout;