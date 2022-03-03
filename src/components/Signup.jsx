import React from "react";
import * as Yup from 'yup';
import { Avatar, Grid, Button, Paper, TextField, Typography, } from "@mui/material"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { makeStyles } from '@mui/styles';
import { Formik, Field, Form, ErrorMessage } from "formik";

import { theme } from '../theme';
import { signup } from '../http/userApi';
import { useDispatch } from "react-redux";
import { signupAction, modalInVisible } from '../redux/actions/actionCreator';



const useStyles = makeStyles((theme) => ({paperStyle: {...theme.authPaperStyle},}))

const Signup = () => {

    const dispatch = useDispatch()

    const classes = useStyles();

    const initialValues={
        firstName:       "",
        lastName:        "",
        email:           "",
        password:        "",
        confirmPassword: "",
    }

    const validationSchema = Yup.object().shape({
        firstName:          Yup.string().min(3, "It's too short").required("Required"),
        lastName:           Yup.string().min(3, "It's too short").required("Required"),
        email:              Yup.string().email("Please, enter valid email").required("Required"),
        password:           Yup.string().min(6, "Minimum lenght shoud be 6").required("Required"),
        confirmPassword:    Yup.string().oneOf([Yup.ref('password')], "Password not mathced").required("Required"),
    })

    const onSubmit = async ({ email, password, firstName, lastName }, props) => {
        const response = await signup(email, password, firstName, lastName)
        if(response) {
            props.resetForm()
            props.setSubmitting(false)
            console.log(`successfully signup ${firstName} ${lastName}`)
            dispatch(signupAction())
            dispatch(modalInVisible())
        }
    };

    return (
        <Grid>
            <Paper className={classes.paperStyle}>
                <Grid align="center">
                    <Avatar className={classes.avatarStyle} sx={{backgroundColor: theme.palette.auth}}>
                        <AddCircleOutlineIcon />
                    </Avatar>
                    <Typography variant="h5">Sign up</Typography> 
                    <Typography variant="caption">Please fill this form to create an account!</Typography>
                </Grid>
                <Formik 
                    initialValues={initialValues} 
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <Field 
                                as={TextField}  
                                variant="standard"
                                name="firstName"
                                label="Name" 
                                placeholder="Enter your name" 
                                fullWidth 
                                required
                                helperText={ <ErrorMessage name="firstName"/>}
                            />
                            <Field 
                                as={TextField} 
                                variant="standard"
                                name="lastName"
                                label="Last name" 
                                placeholder="Enter your last name" 
                                fullWidth 
                                required
                                helperText={ <ErrorMessage name="lastName"/>}
                            />
                            <Field 
                                as={TextField} 
                                variant="standard"
                                name="email"
                                label="Email" 
                                placeholder="Enter your email" 
                                autoComplete="email"
                                fullWidth 
                                required
                                helperText={ <ErrorMessage name="email"/>}
                            />
                            <Field 
                                as={TextField} 
                                variant="standard"
                                name="password"
                                label="Password" 
                                placeholder="Enter your password" 
                                type="password"
                                autoComplete="new-password"
                                fullWidth 
                                required
                                helperText={ <ErrorMessage name="password"/>}
                            />
                            <Field 
                                as={TextField} 
                                variant="standard"
                                name="confirmPassword"
                                label="Confirm password" 
                                placeholder="Confirm your password" 
                                type="password"
                                autoComplete="new-password"
                                fullWidth 
                                required
                                helperText={ <ErrorMessage name="confirmPassword"/>}
                            />
                            <Button 
                                type="submit" 
                                fullWidth 
                                variant="contained" 
                                sx={{margin: "15px 0"}}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "LOADING" : "SIGN UP"}
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Paper>          
        </Grid>
    )
}

export default Signup