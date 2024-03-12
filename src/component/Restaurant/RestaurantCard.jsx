import { Card, Chip, IconButton } from '@mui/material';
import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function RestaurantCard(props) {
    return (
        <Card className='m-5 lg:w-[17rem] '>
            <div className={`${true ? `cursor-pointer` : `cursor-not-allowed`} relative`}>
                <img className='w-full h-[10rem] rounded-md object-cover' src="https://cdn.pixabay.com/photo/2016/11/18/22/21/restaurant-1837150_1280.jpg" alt="" />
                <Chip size='small' className='absolute top-2 left-2'
                    color={true ? "success" : "error"}
                    label={true ? "open" : "closed"} />
            </div>
            <div className='p-4 textPart lg:flex w-full justify-between bg-gray-700' >
                <div className='space-y-1'>
                    <p className='font-semibold text-lg text-white '>Indian Fast Food</p>
                    <p className='text-gray-400 text-sm'>Craving it all? Dive into our global fla...</p>   
                </div>
                <div>
                    <IconButton>
                      {true ? <FavoriteIcon style={{color: "white"}}/> : <FavoriteBorderIcon/> }
                    </IconButton>
                </div>
            </div>
        </Card>
    );
}

export default RestaurantCard;