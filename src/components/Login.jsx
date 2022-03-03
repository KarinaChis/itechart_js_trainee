import React from 'react';
import * as Yup from "yup";
import { Avatar, Button, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Form, Formik, Field, ErrorMessage } from 'formik';

import { theme } from '../theme';
import { login } from '../http/userApi';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { loginAction, modalInVisible } from '../redux/actions/actionCreator';

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
    const dispatch = useDispatch()
    const onSubmit = async ({ email, password }, props) => {
        try {
            const response = await login(email, password)
            if(response) {
                props.resetForm()
                props.setSubmitting(false)
                Cookies.set("accessToken", response.accessToken)
                Cookies.set("refreshToken", response.refreshToken)
                dispatch(loginAction())
                dispatch(modalInVisible())
            }
        } catch (e){ alert(e.response.message) }
    };
    const validationSchema = Yup.object().shape({
        email:    Yup.string().email("Please, enter valid email").required("Required"),
        password: Yup.string().min(6, "Minimum lenght shoud be 6").required("Required"),
    })
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
                    {({ isSubmitting }) => (
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
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "LOADING" : "SIGN IN"} 
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