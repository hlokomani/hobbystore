import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sortByPriceAsc, sortByPriceDesc, sortByDiscount, sortByReviews, sortByRating } from '@/store/actions/sortActions';

const DropDownSort = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSort = (sortAction) => {
        dispatch(sortAction);
        toggleDropdown();
    };

    return (
        <div className="relative inline-block text-left">
            <button
                id="sortDropdownButton1"
                data-dropdown-toggle="dropdownSort1"
                type="button"
                className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-dark_brown hover:bg-lighter_brown hover:text-browner focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
                onClick={toggleDropdown}
            >
                <svg className="-ms-0.5 me-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M7 4l3 3M7 4 4 7m9-3h6l-6 6h6m-6.5 10 3.5-7 3.5 7M14 18h4" />
                </svg>
                Sort
                <svg className="-me-0.5 ms-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                </svg>
            </button>

            <div
                id="dropdownSort1"
                className={`absolute z-50 ${isOpen ? 'block' : 'hidden'} w-40 mt-2 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700`}
                data-popper-placement="bottom"
            >
                <ul className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400" aria-labelledby="sortDropdownButton1">
                    <li>
                        <button onClick={() => handleSort(sortByPriceAsc())} className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                            Increasing price
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleSort(sortByPriceDesc())} className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                            Decreasing price
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleSort(sortByReviews())} className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                            No. reviews
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleSort(sortByRating())} className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                            Rating
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleSort(sortByDiscount())} className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                            Discount %
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DropDownSort;
