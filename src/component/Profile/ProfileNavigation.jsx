import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PaymentIcon from '@mui/icons-material/Payment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import { Divider, Drawer, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const menu = [
    {
        title: "Orders", icon: <ShoppingCartIcon />
    },
    {
        title: "Favorites", icon: <FavoriteIcon />
    },
    {
        title: "Address", icon: <LocationOnIcon />
    },
    {
        title: "Payments", icon: <PaymentIcon />
    },
    {
        title: "Notifications", icon: <NotificationsIcon />
    },
    {
        title: "Events", icon: <EventIcon />
    },
    {
        title: "Logout", icon: <LogoutIcon />
    },

]
function ProfileNavigation({ open, handleClose }) {
    const isSmallScreen = useMediaQuery("(max-width:1080)");

    const navigate = useNavigate();
    const handleNavigate = (item) => {
        navigate(`/my-profile/${item.title.toLowerCase()}`)
    }
    return (
        <div>
            <Drawer
                variant={isSmallScreen ? "temporary" : "permanent"}
                open={isSmallScreen ? open : true}
                 anchor='left'
                sx={{ zIndex: -1 }}
            >
                <div className='w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col justify-center text-xl gap-8 pt-16'>
                    {menu.map((item,index) => (<>
                        <div onClick={() => handleNavigate(item)} className='px-5 flex items-center space-x-5 cursor-pointer'>
                            {item.icon}
                            <span>{item.title}</span>
                        </div>
                        {index!== menu.length - 1 && <Divider/>}
                        </> ))}
                </div>
            </Drawer>
        </div>
    );
}

export default ProfileNavigation;