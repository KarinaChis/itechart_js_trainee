import React from 'react';
import { Avatar, Button, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { theme } from '../theme';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


const useStyles = makeStyles((theme) => ({
    paperStyle: {...theme.authPaperStyle},
    avatarStyle: {
        ...theme.authAvatarStyle,
        backgroundColor: theme.palette.success.main,
    },
    "MuiFormHelperText-root": { color: theme.palette.secondary}
}))

const Login = ({ handleChange }) => {

    const classes = useStyles();

    const initialValues = {
        email:    "",
        password: "",
    };

    const validationSchema = Yup.object().shape({
        email:    Yup.string().email("Please, enter valid email").required("Required"),
        password: Yup.string().min(6, "Minimum lenght shoud be 6").required("Required"),
    })

    const onSubmit = (values, props) => {
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)
    };

    return(
        <Grid>
            <Paper className={classes.paperStyle}>
                <Grid align="center">
                    <Avatar className={classes.avatarStyle} sx={{backgroundColor: theme.palette.auth}}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography variant="h5">Sign in</Typography> 
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
                                name="email"
                                label="Email" 
                                placeholder="Enter your email" 
                                autoComplete="email"
                                fullWidth 
                                required
                                helperText={<ErrorMessage name="email"/>}
                            />
                            <Field 
                                as={TextField}
                                variant="standard"
                                name="password"
                                label="Password" 
                                placeholder="Enter password" 
                                type="password"
                                autoComplete="current-password"
                                fullWidth 
                                required
                                helperText={<ErrorMessage name="password" className={classes.errorStyle}/>}
                            />
                            <Button 
                                type="submit" 
                                fullWidth 
                                variant="contained" 
                                sx={{margin: "15px 0"}}
                                disabled={props.isSubmitting}
                            >
                                 {props.isSubmitting ? "LOADING" : "SIGN IN"}
                                
                            </Button>
                        </Form>
                    )}
                </Formik>
                <Typography component={'span'}> Or click
                    <Link href="#" onClick={() => handleChange("event", 1)}> here </Link>
                    to create new account
                </Typography>
                
            </Paper>

        </Grid>
    )
}

export default Login;