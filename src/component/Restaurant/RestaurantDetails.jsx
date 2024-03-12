import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material';
import React, { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MenuCard from './MenuCard';


const categories = [
    "Pizza",
    "biryani",
    "Burger",
    "Chiken",
    "Rice"
]
const foodTypes = [
    { label: "All", value: "all" },
    { label: "Vegetarian only", value: "vegetarian" },
    { label: "Non-Vegetarian", value: "non-vegetarian" },
    { label: "Seasonal", value: "seasonal" },
]
const menu = [1, 1, 1, 1, 1, 1];

function RestaurantDetails(props) {
    const [foodType, setFoodType] = useState("all");
    const handleFilter = (e) => {
        console.log(e.target.value, e.target.name);
    }
    return (
        <div className='px-5 lg:px-20'>
            <section>
                <h3 className='text-gray-500 py-2 mt-10'>Home/india/indian fast food/</h3>
            </section>
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <img className='w-full h-[40vh] object-cover' src="https://cdn.pixabay.com/photo/2018/08/03/20/24/ice-cream-shop-3582699_1280.jpg" alt="" />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img className='w-full h-[40vh] object-cover' src="https://cdn.pixabay.com/photo/2020/03/29/12/28/architecture-4980515_1280.jpg" alt="" />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img className='w-full h-[40vh] object-cover' src="https://cdn.pixabay.com/photo/2020/01/17/06/12/breakfast-4772319_1280.jpg" alt="" />
                    </Grid>
                </Grid>
            </div>
            <div className='pt-3 pb-5'>
                <h1 className='text-4xl font-semibold'>Indian Fast Food</h1>
                <p className='text-gray-500 flex items-center gap-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque corporis
                    dolore fugit nihil ea nemo ad fuga? Ullam exercitationem id dolore voluptatem
                    nisi dolorem possimus quod ea, veniam reprehenderit eum.</p>
                <div className=' flex p-2'>
                    <LocationOnIcon />
                    <p className='ms-2'>Ambavadi choke</p>
                </div>
                <div className=' flex ms-2'>
                    <CalendarMonthIcon />
                    <p className='ms-2 text-yellow-400'>Mon-Sun: 9:00AM - 9:00 PM (Today)</p>
                </div>
            </div>
            <Divider />
            <section className='pt-[2rem] lg:flex relative'>
                <div className='space-y-10 lg:w-[15%] filter'>
                    <div className='box space-y-5 lg:sticky top-28'>
                        <div>
                            <Typography variant='h5' sx={{ paddingBottom: "1rem" }}>
                                Food Type
                            </Typography>
                            <FormControl className='py-10 space-y-5' component={"fieldset"}>
                                <RadioGroup onChange={handleFilter} name='food_type' value={foodType} >
                                    {foodTypes.map((item) => (
                                        <FormControlLabel
                                            key={item.value}
                                            value={item.value}
                                            control={<Radio />} // Set color of checked radio button
                                            label={item.label}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <Divider />
                        <div>
                            <Typography variant='h5' sx={{ paddingBottom: "1rem" }}>
                                Food Category
                            </Typography>
                            <FormControl className='py-10 space-y-5' component={"fieldset"}>
                                <RadioGroup onChange={handleFilter} name='food_type' value={foodType} >
                                    {categories.map((item) => (
                                        <FormControlLabel
                                            key={item}
                                            value={item}
                                            control={<Radio />} // Set color of checked radio button
                                            label={item}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <div className='space-y-10 lg:w-[85%] lg:pl-10'>
                    {menu.map((item) => (
                        <MenuCard />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default RestaurantDetails;