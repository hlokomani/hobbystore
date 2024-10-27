'use client';
import Link from 'next/link';
import React from 'react';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { useParams } from "next/navigation";
import Checkout from "@/components/ShoppinCart/Checkout"

import guitars from '@/data/guitars';

const CheckoutCart = () => {
    const product_id = Number.parseInt(useParams().product_id, 10) || 1;
    const guitar = guitars.find(guitar => guitar.id === product_id);

    return (
        <>
            <Header />

            <Checkout />

            <Footer />
        </>
    );
}

export default CheckoutCart;
