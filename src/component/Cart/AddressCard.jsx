import { Button, Card } from '@mui/material';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';

function AddressCard({item,showButton}) {
    const handleSelectAddress = () => {

    }
    return (
        <Card className='flex gap-5 w-64 p-5'>
            <HomeIcon />
            <div className='space-y-3 text-gray-500'>
                <h1 className='font-semibold text-lg text-white'>Home</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, labore! Dignissimos fuga magnam eum consequuntur magni dolore id molestias cumque omnis. Explicabo eius nulla aliquid blanditiis ad culpa molestias ab.
                </p>
                {showButton && <Button variant='contained'fullWidth onClick={() => handleSelectAddress()}>select</Button>}
            </div>
        </Card>
    );
}

export default AddressCard;