import React from 'react';
import RestauranCard from '../Restaurant/RestaurantCard';
function Favorites(props) {
    return (
        <div>
            <h1 className='py-5 text-xl font-semibold text-center'>My Favorites</h1>
            <div className='flex flex-wrap justify-center'>
                {[1, 1, 1, 1].map((item) => <RestauranCard />)}
            </div>
        </div>
    );
}

export default Favorites;