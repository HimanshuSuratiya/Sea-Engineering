import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { NavLink } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles";

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

    // textColor: {
    //     color: '#009DA6'
    // },

    // forgetPass: {
    //     textDecoration: 'none',
    //     color: '#000',
    //     fontWeight: '600',
    // },

    // LoginBtn: {
    //     color: '#ffffff !important',
    //     padding: '4px 20px',
    //     transition: '.5s !important',
    //     fontSize: '16px !important',
    //     borderRadius: '20px !important',
    //     border: '2px solid #188dc7 !important',
    //     backgroundColor: '#009DA6 !important',
    //     "&:hover": {
    //         color: 'black !important',
    //         border: '2px solid #188dc7 !important',
    //         background: '#8fc1e2 !important',
    //     },
    // },
}));

const Register = () => {
    const classes = useStyles();

    return (
        <>
            <div className={`bg-image vh-100 w-100 d-flex align-items-center justify-content-center ${classes.mainTopDivArea}`}>
                <div className={`row p-4 ${classes.innerDivArea}`}>
                    <div className="col ">
                        <h4 ><span style={{ color: '#009DA6' }}>SEA-ENGINEERING</span> &nbsp; REGISTER</h4>
                        <p className="fw-bold" style={{ color: '#757575' }}>Access to our dashboard</p>
                        <TextField id="outlined-basic" label="First Name" variant="outlined" className="mx-2" />
                        <TextField id="outlined-basic" label="Last Name" variant="outlined" className="" autoComplete="off" />
                        <TextField fullWidth label="Email Address" id="fullWidth" autoComplete="off" className="mt-3 px-2 " />
                        <TextField id="outlined-basic" label="Password" variant="outlined" autoComplete="off" className="mt-3 mx-2" />
                        <TextField id="outlined-basic" label="Confirm Password" variant="outlined" autoComplete="off" className="mt-3" />
                        <p className="mt-3  ">  <Checkbox className="m-0 p-0" />I agree to Mentoring<span style={{ color: "#1890ff" }}>Privacy Policy</span>&<span style={{ color: "#1890ff" }}> Terms.</span></p>
                        <Button fullWidth variant="contained " style={{ backgroundColor: "#009DA6" }} className="text-white">Create Account</Button>
                        <p className="text-center mt-3">Already have an account?&nbsp;<span className="border-bottom border-dark"><NavLink to="/">Login</NavLink></span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;