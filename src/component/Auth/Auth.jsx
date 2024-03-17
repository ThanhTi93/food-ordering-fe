import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { style } from '../Cart/Cart';
import { Box, Modal } from '@mui/material';
import Register from './Register';
import LoginForm from './LoginForm';
function Auth(props) {
    
    const location = useLocation();
    const navigate = useNavigate();
    const handleOnClose = () => {
        navigate("/");
    }

    return (
        <Modal onClose={handleOnClose}  open={ 
            location.pathname === "/account/register" ||
            location.pathname === "/account/login"       
        }>
            <Box sx={style}>
                {location.pathname==='/account/register'? <Register/>: <LoginForm/>}
            </Box>

        </Modal>
    );
}

export default Auth;