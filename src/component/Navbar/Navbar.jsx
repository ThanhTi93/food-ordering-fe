import { Avatar, Badge, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react';
import { pink } from '@mui/material/colors';
import "./Navbar.scss";
export const  Navbar = ()  => {
    return (
        <div className='px-5 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between' >
            <div className='flex items-center space-x-4'>
                <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
                    <li className='logo font-semibold text-gray-300 text-2xl'>Daykemit Food</li>
                </div>
            </div>
            <div className="flex items-center space-x-2 lg:space-x-10 ">
                <div>
                    <IconButton>
                        <SearchIcon style={{ color: "white" }} sx={{ fontSize: "1.5rem" }} />
                    </IconButton>
                </div>
                <div>
                    <Avatar sx={{ backgroundColor: "white", color: pink.A400 }}>
                        T
                    </Avatar>
                </div>
                <div>
                    <IconButton>
                        <Badge color='secondary' badgeContent={3}>
                            <ShoppingCartIcon style={{ color: "white" }} sx={{ fontSize: "1.5rem" }} />
                        </Badge>

                    </IconButton>
                </div>
            </div>
        </div>
    );
}
