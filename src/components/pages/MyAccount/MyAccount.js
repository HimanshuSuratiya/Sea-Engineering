import React from "react";
import TextField from '@mui/material/TextField';

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
                                            <h3 class="mb-0" style={{ color: '#188dc7' }}>My account</h3>
                                        </div>
                                        <div class="col-4 text-end">
                                            <button type="button" class="btn  btn-outline-success ">Update</button>
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