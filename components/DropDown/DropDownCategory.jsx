import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterByCategory } from '@/store/actions/filterActions';

const DropDownCategory = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenInner, setIsOpenInner] = useState(false);
    const dispatch = useDispatch();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdownInner = () => {
        setIsOpenInner(!isOpenInner);
    };

    const handleFilter = (filterAction) => {
        dispatch(filterAction);
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
                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z" />
                </svg>
                    Choose Category
                <svg className="-me-0.5 ms-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                </svg>
            </button>

            <div
                id="dropdownSort1"
                className={`absolute z-50 ${isOpen ? 'block' : 'hidden'} w-60 mt-2 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700`}
                data-popper-placement="bottom"
            >
                <ul className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400" aria-labelledby="filterDropdownButton1">
                    <li>
                        <button onClick={() => handleFilter(filterByCategory("Electric | Solid Body"))} className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                            All
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleFilter(filterByCategory("Electric"))} className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                            Electric
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleFilter(filterByCategory("Solid Body"))} className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                            Solid Body
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleFilter(filterByCategory("Semi-Hollow"))} className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                            Semi-Hollow
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DropDownCategory;
