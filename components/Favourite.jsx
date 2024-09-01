import React from 'react';

const Favourite = () => {
    const [isFavorited, setIsFavorited] = React.useState(false);

    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
    };
    
    return (
        <button
            onClick={toggleFavorite}
            type="button"
            data-tooltip-target="tooltip-add-to-favorites"
            className="rounded-lg p-2 text-red-500 hover:bg-red-100 hover:text-red-900 dark:text-red-400 dark:hover:bg-red-700 dark:hover:text-white"
        >
            <span className="sr-only">Add to Favorites</span>
            <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill={isFavorited ? 'red' : 'none'}
                viewBox="0 0 24 24"
            >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                />
            </svg>
        </button>
    );
};

export default Favourite;
