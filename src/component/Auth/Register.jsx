import { Button, TextField, Typography } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const initialValues = {
    fullName: "",
    email: "",
    password: "",
    role: "ROLE_CUSTOMER"
}

function Register(props) {
    const handleSubmit = (values) => {
        console.log("values", values)
    }
    const navigate = useNavigate();
    return (
        <div>
            <Typography variant='h5' className='text-center'>
                Register
            </Typography>
            <Formik onSubmit={handleSubmit} initialValues={initialValues}>
                <Form>
                    <Field
                        as={TextField}
                        name="fullName"
                        label="full name"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />
                    <Field
                        as={TextField}
                        name="email"
                        label="email"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />
                    <Field
                        as={TextField}
                        name="password"
                        type="password"
                        label="password"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />
                    <Field fullWidth as={Select} sx={{ mt: 2 }}
                        labelId="role-simple-select-label"
                        id="role-simple-select"
                        name="role"
                    >
                        <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                        <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>
                    </Field>
                    <Button sx={{ mt: 3, padding: "0.8rem" }} margin="normal" fullWidth type='submit' variant='contained'>Register</Button>
                </Form>
            </Formik>
            <Typography variant='body2' align='center' sx={{ mt: 3 }}>
                If have an account already?
                <Button onClick={() => navigate("/account/login")}>Login</Button>
            </Typography>
        </div>
    );
}

export default Register;