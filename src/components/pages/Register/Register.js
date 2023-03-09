import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { NavLink } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
const useStyles = makeStyles(() => ({
    mainTopDivArea: {
        backgroundImage: `url('https://mentoring-react.dreamguystech.com/template-1/39b4533ffb1590f627856bc7b3013d84.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    innerDivArea: {
        heigh: '250px',
        width: '40%',
        borderRadius: '8px',
        backgroundColor: 'rgb(253 250 250)',
        border: '1px solid #4c4a4a',
        boxShadow: 'rgb(100 100 111 / 20%) 0px 7px 29px 0px',
    },
    loginStyle: {
        textDecoration: 'none',
        color: '#3d3d3d !important',
        display: 'inline-block',
        fontSize: '16px',
        marginBottom: '20px',
        fontWeight: '600',
        color: 'rgb(24, 144, 255)'
    },
    createAccount: {
        color: '#ffffff !important',
        padding: '4px 20px',
        transition: '.5s !important',
        fontSize: '16px !important',
        borderRadius: '20px !important',
        border: '2px solid #188dc7 !important',
        backgroundColor: '#009DA6 !important',
        "&:hover": {
            color: 'black !important',
            border: '2px solid #188dc7 !important',
            background: '#8fc1e2 !important',
        },
    }
}));
const defaultState = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',

}

const Register = () => {

    const [state, setState] = useState(defaultState)
    const classes = useStyles();

    const registrationData = (event) => {
        const { name, value } = event.target;
        setState((prevState) => {
            return {
                ...prevState,
                [name]: value,
            }
        })
    }

    const submitData = (e) => {

        e.preventDefault();

        axios.post("http://69.49.235.253:8069/api/register/", {
            first_name: state.firstName,
            last_name: state.lastName,
            username: state.userName,
            email: state.email,
            password: state.password,
            password: state.confirmPassword
        })
            .then((response) => {
                console.log(response);

            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <div className={`bg-image vh-100 w-100 d-flex align-items-center justify-content-center ${classes.mainTopDivArea}`}>
                <div className={`row p-4 ${classes.innerDivArea}`}>
                    <div className="col ">
                        <form onSubmit={submitData}>
                            <h4 ><span style={{ color: '#009DA6' }}>SEA-ENGINEERING</span> &nbsp; REGISTER</h4>
                            <p className="fw-bold" style={{ color: '#757575' }}>Access to our dashboard</p>
                            <TextField id="outlined-basic" label="First Name" name="firstName" value={state.firstName} onChange={registrationData} variant="outlined" className="mx-2" />

                            <TextField id="outlined-basic" name="lastName" value={state.lastName} onChange={registrationData} label="Last Name" variant="outlined" className="" autoComplete="off" />

                            <TextField fullWidth label="User Name" name="userName" value={state.userName} onChange={registrationData} id="fullWidth" autoComplete="off" className="mt-3 px-2 " />

                            <TextField fullWidth label="Email Address" name="email" value={state.email} onChange={registrationData} id="fullWidth" autoComplete="off" className="mt-3 px-2 " />

                            <TextField id="outlined-basic" name="password" value={state.password} onChange={registrationData} label="Password" variant="outlined" autoComplete="off" className="mt-3 mx-2" />

                            <TextField id="outlined-basic" name="confirmPassword" value={state.confirmPassword} onChange={registrationData} label="Confirm Password" variant="outlined" autoComplete="off" className="mt-3" />

                            <p className="mt-3  ">  <Checkbox className="m-0 p-0" />I agree to Mentoring<span style={{ color: "#1890ff" }}>Privacy Policy</span>&<span style={{ color: "#1890ff" }}> Terms.</span></p>

                            <Button type="submit" fullWidth variant="contained " className={`${classes.createAccount}`}>Create Account</Button>
                        </form>

                        <p className="text-center mt-3">Already have an account?&nbsp;<span className={`p-0 m-0 ${classes.loginStyle}`}><NavLink to="/">Login</NavLink></span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;