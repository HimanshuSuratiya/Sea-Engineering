import React, { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom"
import Button from '@mui/material/Button';
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

    textColor: {
        color: '#009DA6',
        color: 'rgb(117, 117, 117)'
    },

    seaEngineering: {
        color: '#009DA6'
    },

    register: {
        textDecoration: 'none',
        color: '#009DA6',
        fontWeight: '600',
        borderBottom: '1px dashed'
    },

    forgetPass: {
        color: '#3d3d3d',
        display: 'inline-block',
        fontSize: '16px',
        marginBottom: '20px',
        fontWeight: '600'
    },

    LoginBtn: {
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
    },
}));

const defaultState = {
    userName: '',
    password: '',
}

const Login = () => {
    const classes = useStyles();
    const [state, setState] = useState(defaultState)
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/login')
    }, [])

    const loginApproved = (event) => {
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

        axios.post("http://69.49.235.253:8069/api/login/", {
            username: state.userName,
            password: state.password,
        })
            .then((response) => {
                const { token } = response.data;
                const abc = true
                console.log(response.data, abc, 'response')
                if (response.data.status === 'True') {
                    localStorage.setItem('isLoginType', 1)
                    localStorage.setItem('token', token.access)

                    navigate('/dashboard')
                    window.location.reload()
                } else alert('something went wrong please tray again after some time')
            })

            .catch((error) => {
                console.log(error);
            });
    }

    /***********************************************************************************/

    return (
        <>
            <div className={`bg-image vh-100 w-100 d-flex align-items-center justify-content-center ${classes.mainTopDivArea}`}>
                <div className={`row p-4 ${classes.innerDivArea}`}>
                    <div className="col ">
                        <form onSubmit={submitData}>
                            <h4>LOGIN &nbsp;<span className={`${classes.seaEngineering}`} >SEA-ENGINEERING</span></h4>
                            <p className={`fw-bold ${classes.textColor}`} >Access to our dashboard</p>
                            <TextField
                                fullWidth
                                label="User Name"
                                name="userName"
                                type="text"
                                autoComplete="off"
                                onChange={loginApproved}
                                value={state.userName}
                            />
                            <TextField
                                className="mt-3"
                                fullWidth label="Password"
                                name="password"
                                type="password"
                                onChange={loginApproved}
                                value={state.password}
                                autoComplete="off"
                            />
                            <div className="py-3 text-end">
                                <NavLink className={`${classes.forgetPass}`} to="/forget-password">Forgot Password ?</NavLink>
                            </div>
                            <Button type="submit" fullWidth variant="contained" className={`${classes.LoginBtn}`} >Login</Button>
                        </form>
                        <div className="mt-4 d-flex align-items-center justify-content-between">
                            <p className="text-center p-0 m-0">Don???t have an account?</p>
                            <NavLink className={`p-0 m-0 ${classes.register}`} to="/register">Register</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;