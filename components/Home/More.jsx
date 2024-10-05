'use client';
import React from 'react';

export function More() {
    return (
        <>
            <main className="page bg-white">
                <section className="page__store store">
                    <div className="store__container">
                        <h2 className="store__title title">Check out the <span>Store</span></h2>
                        <div className="store__body body-store">
                            <div className="body-store__header">
                                <h3 className="body-store__title">NEW GUITARS ON THE BOARD</h3>
                            </div>
                            <div className="body-store__items">
                                <div className="body-store__item item">
                                    <a href="" className="item__image"><img src="/assets/store/1.jpg" alt=""/></a>
                                    <a href="" className="item__title">The Essential Les Paul</a>
                                    <div className="item__price">R1,299.00</div>
                                </div>
                                <div className="body-store__item item">
                                    <a href="" className="item__image"><img src="/assets/store/2.jpg" alt=""/></a>
                                    <a href="" className="item__title">J-45 Standard</a>
                                    <div className="item__price">R1,699.00</div>
                                </div>
                                <div className="body-store__item item">
                                    <a href="" className="item__image"><img src="/assets/store/3.jpg" alt=""/></a>
                                    <a href="" className="item__title">Hummingbird Standard</a>
                                    <div className="item__price">R2,099.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="page__categories categories">
                    <div className="categories__container">
                        <h2 className="categories__title title">Choose based on <span>Categories</span></h2>
                        <div className="categories__items">
                            <a href="#" className="categories__item item-category">
                                <div className="item-category__title">Acoustic</div>
                                <div className="item-category__image">
                                    <img src="/assets/categories/Acoustic.jpg" alt="Category"/>
                                </div>
                            </a>
                            <a href="#" className="categories__item item-category">
                                <div className="item-category__title">Electric</div>
                                <div className="item-category__image">
                                    <img src="/assets/categories/Electric.jpg" alt="Category"/>
                                </div>
                            </a>
                            <a href="#" className="categories__item item-category">
                                <div className="item-category__title">Basses</div>
                                <div className="item-category__image">
                                    <img src="/assets/categories/Basses.jpg" alt="Category"/>
                                </div>
                            </a>
                            <a href="#" className="categories__item item-category">
                                <div className="item-category__title">Collections</div>
                                <div className="item-category__image">
                                    <img src="/assets/categories/Collections.jpg" alt="Category"/>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
                <section className="page__brands brands">
                    <div className="brands__container">
                        <h2 className="brands__title title">Featuring the <span>Best Brands</span></h2>
                        <div className="brands__items">
                            <div className="brands__item">
                                <img src="/assets/brands/1.png" alt="Brands"/>
                            </div>
                            <div className="brands__item">
                                <img src="/assets/brands/2.png" alt="Brands"/>
                            </div>
                            <div className="brands__item">
                                <img src="/assets/brands/3.png" alt="Brands"/>
                            </div>
                            <div className="brands__item">
                                <img src="/assets/brands/4.png" alt="Brands"/>
                            </div>
                            <div className="brands__item">
                                <img src="/assets/brands/5.png" alt="Brands"/>
                            </div>
                            <div className="brands__item">
                                <img src="/assets/brands/6.png" alt="Brands"/>
                            </div>
                            <div className="brands__item">
                                <img src="/assets/brands/7.png" alt="Brands"/>
                            </div>
                            <div className="brands__item">
                                <img src="/assets/brands/8.png" alt="Brands"/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="page__why why">
                    <div className="why__container">
                        <h2 className="why__title title">Why try <span>HarmonyHub?</span></h2>
                        <div className="why__items">
                            <div className="why__item item-why">
                                <div className="item-why__icon">
                                    <img src="/assets/why-try/1.svg" alt="Icon"/>
                                </div>
                                <h3 className="item-why__title">Expert Selection</h3>
                                <p className="item-why__text">Handpicked guitars from top manufacturers worldwide.</p>
                            </div>
                            <div className="why__item item-why">
                                <div className="item-why__icon">
                                    <img src="/assets/why-try/2.svg" alt="Icon"/>
                                </div>
                                <h3 className="item-why__title">Fast Shipping </h3>
                                <p className="item-why__text">Quick and secure delivery to your doorstep.</p>
                            </div>
                            <div className="why__item item-why">
                                <div className="item-why__icon">
                                    <img src="/assets/why-try/3.svg" alt="Icon"/>
                                </div>
                                <h3 className="item-why__title">30-Day Returns</h3>
                                <p className="item-why__text">Try your new guitar risk-free for 30 days.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="page__favorite favorite bg-[#F4F3FA]">
                    <div className="favorite__container">
                        <div className="favorite__body">
                            <h2 className="favorite__title title">Find your <span>Dream</span> guitar with <span>HarmonyHub</span></h2>
                            <div className="favorite__apps apps-favorite">
                                <a href="" className="apps-favorite__item"><img src="/assets/favorite/favorite-appG.jpg" alt="Google"/></a>
                                <a href="" className="apps-favorite__item"><img src="/assets/favorite/favorite-appS.jpg" alt="Apple"/></a>
                            </div>
                        </div>
                        <div className="favorite__image">
                            <img src="/assets/favorite/favorite-image.png" alt="Favorite Guitars"/>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}