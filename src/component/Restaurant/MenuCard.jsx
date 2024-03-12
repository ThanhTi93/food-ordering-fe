import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, FormGroup } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const ingrediens = [
    {
        category: "Nuts & seeds",
        ingrediens: ["Cashews"]
    },
    {
        category: "Protein",
        ingrediens: ["Protein"]
    },
    {
        category: "Protein",
        ingrediens: ["Ground ", "Bacon strips"]
    }

]
function MenuCard(props) {
    const  handleCheckBox = (value) => {

    }
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <div className='lg:flex items-center justify-between'>
                    <div className='lg:flex items-center lg:gap-5'>
                        <img className='w-[7rem] h-[7rem]' src="https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg" alt="" />
                        <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                            <p className='font-semibold text-xl'>Burger</p>
                            <p>499 $</p>
                            <p></p>
                        </div>
                    </div>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <form >
                    <div className='flex gap-5 flex-wrap'>
                        {ingrediens.map((item) => (
                            <div>
                                <p>{item.category}</p>
                                <FormGroup>
                                    {item.ingrediens.map((item) => (
                                        <FormControlLabel control={<Checkbox  onChange={() => handleCheckBox(item)}/>} label={item} />
                                    ))}
                                </FormGroup>
                            </div>
                        ))}
                    </div>
                    <div className='pt-5'>
                        <Button variant='contained' disabled={false} type='submit'>{true ? "Add to Card" : "Out Of Stock"}</Button>
                    </div>
                </form>
            </AccordionDetails>
        </Accordion>
    );
}

export default MenuCard;