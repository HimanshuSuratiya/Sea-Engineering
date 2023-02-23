import React from "react";
import TextField from '@mui/material/TextField';
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
        color: '#009DA6',
        color: 'rgb(117, 117, 117)',
        display: 'inline-block',
        fontSize: '16px',
        marginBottom: '20px',
        fontWeight: '600',
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

const MyAccount = () => {
    return (
        <>
            <div class="main-content">
                <div class="container mt-3">
                    <div class="row">
                        <div class="col-xl-8 m-auto order-xl-1">
                            <div class="card shadow">
                                <div class="card-header bg-white border-0">
                                    <div class="row align-items-center">
                                        <div class="col-8">
                                            <h3 class="mb-0">My account</h3>
                                        </div>
                                        <div class="col-4 text-right">
                                            <button type="button" class="btn  btn-outline-success  mx-2">Edit</button>
                                            <button type="button" class="btn  btn-outline-success ">Save</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <form>
                                        <h6 class="heading-small text-muted mb-4">User information</h6>
                                        <div class="pl-lg-4">
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <div class="form-group focused">
                                                        <TextField fullWidth label="User Name" id="fullWidth" autoComplete="off" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <TextField fullWidth label="Email" id="fullWidth" autoComplete="off" />
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-6 mt-3">
                                                    <TextField fullWidth label="First Name" id="fullWidth" autoComplete="off" />
                                                </div>
                                                <div class="col-lg-6 mt-3">
                                                    <TextField fullWidth label="Last Name" id="fullWidth" autoComplete="off" />
                                                </div>
                                            </div>
                                        </div>
                                        <hr class="my-4" />
                                        <h6 class="heading-small text-muted mb-4">Contact information</h6>
                                        <div class="pl-lg-4">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <TextField fullWidth label="Address" id="fullWidth" autoComplete="off" />
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-4 mt-3">
                                                    <TextField fullWidth label="City" id="fullWidth" autoComplete="off" />
                                                </div>
                                                <div class="col-lg-4 mt-3">
                                                    <TextField fullWidth label="Country" id="fullWidth" autoComplete="off" />
                                                </div>
                                                <div class="col-lg-4 mt-3">
                                                    <TextField fullWidth label="Postal code" id="fullWidth" autoComplete="off" />
                                                </div>
                                            </div>
                                        </div>
                                        <hr class="my-4" />
                                        <h6 class="heading-small text-muted mb-4">About me</h6>
                                        <div class="pl-lg-4">
                                            <div class="form-group focused">
                                                <label>About Me</label>
                                                <textarea rows="3" class="form-control form-control-alternative" placeholder="A few words about you ..."></textarea>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyAccount;