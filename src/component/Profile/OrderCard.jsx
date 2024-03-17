import { Button, Card } from '@mui/material';
import React from 'react';

function OrderCard(props) {
    return (
        <Card className='flex justify-between items-center p-5'>
            <div className='flex items-center space-x-5'>
                <img className='h-16 w-16' src="https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg" alt="" />
                <div>
                    <p>Byriani</p>
                    <p>399$</p>
                </div>
            </div>
            <div>
                <Button variant='contained' className='cursor-not-allowed'>completed</Button>
            </div>

        </Card>
    );
}

export default OrderCard;