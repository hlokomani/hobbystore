
'use client';
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

export function More() {
    return (
        <>
            <main class="page bg-white">
                <section class="page__store store">
                    <div class="store__container">
                        <h2 class="store__title title">Check out the <span>Store</span></h2>
                        <div class="store__body body-store">
                            <div class="body-store__header">
                                <h3 class="body-store__title">NEW GUITARS ON THE BOARD</h3>
                            </div>
                            <div class="body-store__items">
                                <div class="body-store__item item">
                                    <a href="" class="item__image"><img src="/assets/store/1.jpg" alt=""/></a>
                                    <a href="" class="item__title">The Essential Les Paul</a>
                                    <div class="item__price">$1,299.00</div>
                                </div>
                                <div class="body-store__item item">
                                    <a href="" class="item__image"><img src="/assets/store/2.jpg" alt=""/></a>
                                    <a href="" class="item__title">J-45 Standard</a>
                                    <div class="item__price">$1,699.00</div>
                                </div>
                                <div class="body-store__item item">
                                    <a href="" class="item__image"><img src="/assets/store/3.jpg" alt=""/></a>
                                    <a href="" class="item__title">Hummingbird Standard</a>
                                    <div class="item__price">$2,099.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="page__categories categories">
                    <div class="categories__container">
                        <h2 class="categories__title title">Choose based on <span>Categories</span></h2>
                        <div class="categories__items">
                            <a href="#" class="categories__item item-category">
                                <div class="item-category__title">Acoustic</div>
                                <div class="item-category__image">
                                    <img src="/assets/categories/Acoustic.jpg" alt="Category"/>
                                </div>
                            </a>
                            <a href="#" class="categories__item item-category">
                                <div class="item-category__title">Electric</div>
                                <div class="item-category__image">
                                    <img src="/assets/categories/Electric.jpg" alt="Category"/>
                                </div>
                            </a>
                            <a href="#" class="categories__item item-category">
                                <div class="item-category__title">Basses</div>
                                <div class="item-category__image">
                                    <img src="/assets/categories/Basses.jpg" alt="Category"/>
                                </div>
                            </a>
                            <a href="#" class="categories__item item-category">
                                <div class="item-category__title">Collections</div>
                                <div class="item-category__image">
                                    <img src="/assets/categories/Collections.jpg" alt="Category"/>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
                <section class="page__brands brands">
                    <div class="brands__container">
                        <h2 class="brands__title title">Featuring the <span>Best Brands</span></h2>
                        <div class="brands__items">
                            <div class="brands__item">
                                <img src="/assets/brands/1.png" alt="Brands"/>
                            </div>
                            <div class="brands__item">
                                <img src="/assets/brands/2.png" alt="Brands"/>
                            </div>
                            <div class="brands__item">
                                <img src="/assets/brands/3.png" alt="Brands"/>
                            </div>
                            <div class="brands__item">
                                <img src="/assets/brands/4.png" alt="Brands"/>
                            </div>
                            <div class="brands__item">
                                <img src="/assets/brands/5.png" alt="Brands"/>
                            </div>
                            <div class="brands__item">
                                <img src="/assets/brands/6.png" alt="Brands"/>
                            </div>
                            <div class="brands__item">
                                <img src="/assets/brands/7.png" alt="Brands"/>
                            </div>
                            <div class="brands__item">
                                <img src="/assets/brands/8.png" alt="Brands"/>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="page__why why">
                    <div class="why__container">
                        <h2 class="why__title title">Why try <span>HarmonyHub?</span></h2>
                        <div class="why__items">
                            <div class="why__item item-why">
                                <div class="item-why__icon">
                                    <img src="/assets/why-try/1.svg" alt="Icon"/>
                                </div>
                                <h3 class="item-why__title">Expert Selection</h3>
                                <p class="item-why__text">Handpicked guitars from top manufacturers worldwide.</p>
                            </div>
                            <div class="why__item item-why">
                                <div class="item-why__icon">
                                    <img src="/assets/why-try/2.svg" alt="Icon"/>
                                </div>
                                <h3 class="item-why__title">Fast Shipping </h3>
                                <p class="item-why__text">Quick and secure delivery to your doorstep.</p>
                            </div>
                            <div class="why__item item-why">
                                <div class="item-why__icon">
                                    <img src="/assets/why-try/3.svg" alt="Icon"/>
                                </div>
                                <h3 class="item-why__title">30-Day Returns</h3>
                                <p class="item-why__text">Try your new guitar risk-free for 30 days.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="page__favorite favorite bg-[#F4F3FA]">
                    <div class="favorite__container">
                        <div class="favorite__body">
                            <h2 className="favorite__title title">Find your <span>Dream</span> guitar with <span>HarmonyHub</span></h2>
                            <div class="favorite__apps apps-favorite">
                                <a href="" class="apps-favorite__item"><img src="/assets/favorite/favorite-appG.jpg" alt="Google"/></a>
                                <a href="" class="apps-favorite__item"><img src="/assets/favorite/favorite-appS.jpg" alt="Apple"/></a>
                            </div>
                        </div>
                        <div class="favorite__image">
                            <img src="/assets/favorite/favorite-image.jpg" alt="Favorite Guitars"/>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}