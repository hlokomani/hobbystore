const calculateDiscountedPrice = (price, discount) => {
    const discountString = typeof discount === 'string' ? discount : '';
    const discountPercentage = parseFloat(discountString.replace('% off', '')) || 0;
    const originalPrice = parseFloat(price.replace(/,/g, ''));

    return originalPrice * (1 - (discountPercentage / 100));
};

export default calculateDiscountedPrice;