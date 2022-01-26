import { Avatar, Grid, Button, Paper, TextField, Typography, } from "@mui/material"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { makeStyles } from '@mui/styles';
import React from "react";
import { theme } from '../theme';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';

const useStyles = makeStyles((theme) => ({
    paperStyle: {...theme.authPaperStyle},

}))
const initialValues={
    name:            "",
    lastName:        "",
    email:           "",
    password:        "",
    confirmPassword: "",
}

const Signup = () => {

    const classes = useStyles();

    const validationSchema = Yup.object().shape({
        name:               Yup.string().min(3, "It's too short").required("Required"),
        lastName:           Yup.string().min(3, "It's too short").required("Required"),
        email:              Yup.string().email("Please, enter valid email").required("Required"),
        password:           Yup.string().min(6, "Minimum lenght shoud be 6").required("Required"),
        confirmPassword:    Yup.string().oneOf([Yup.ref('password')], "Password not mathced").required("Required"),
    })

    const onSubmit = (values, props) => {
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting()
        }, 2000)
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
                    {(props) => (
                        <Form>
                            <Field 
                                as={TextField}  
                                variant="standard"
                                name="name"
                                label="Name" 
                                placeholder="Enter your name" 
                                fullWidth 
                                required
                                helperText={ <ErrorMessage name="name"/>}
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
                                fullWidth 
                                required
                                helperText={ <ErrorMessage name="confirmPassword"/>}
                            />
                            <Button 
                                type="submit" 
                                fullWidth 
                                variant="contained" 
                                sx={{margin: "15px 0"}}
                                disabled={props.isSubmitting}
                            >
                                {props.isSubmitting ? "LOADING" : "SIGN UP"}
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Paper>          
        </Grid>
    )
}

export default Signup