import React from "react";
import TextField from '@mui/material/TextField';

const MyProfile = () => {
    return (
        <>
            <div class="container rounded bg-white mt-2 mb-2">
                <div class="row">
                    <div class="col-md-3 border-right">
                        <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="images Loading" /><span class="font-weight-bold">Edogaru</span><span class="text-black-50">vishal@gmail.com</span><span> </span></div>
                    </div>
                    <div class="col-md-5 border-right">
                        <div class="p-3 py-5">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h4 class="text-right " style={{ color: '#188dc7' }}> My Profile </h4>
                            </div>
                            <div class="form-outline mb-4">
                                <TextField fullWidth label="Name" id="fullWidth" autoComplete="off" />
                            </div>
                            <div class="form-outline mb-4">
                                <TextField fullWidth label="Email Id" id="fullWidth" autoComplete="off" />
                            </div>
                            <div class="form-outline mb-4">
                                <TextField fullWidth label="Address" id="fullWidth" autoComplete="off" />
                            </div>
                            <div class="form-outline mb-4">
                                <TextField fullWidth label="Education" id="fullWidth" autoComplete="off" />
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-6"><TextField id="outlined-basic" label="Country" variant="outlined" /></div>
                                <div class="col-md-6"><TextField id="outlined-basic" label="State/Region" variant="outlined" /></div>
                            </div>
                            <div class="mt-5 text-center"><button class="btn  btn-outline-success " type="button">Save Profile</button></div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="p-3 py-5">
                            <div class="d-flex justify-content-between align-items-center experience"><span style={{ color: '#188dc7' }} >Edit Experience</span><span class="border px-3 p-1 add-experience" ><i class="fa fa-plus"></i>&nbsp;Experience</span></div><br />
                            <TextField id="outlined-basic" label="Experience " variant="outlined" /> <br />
                            <div class="col-md-12 mt-3"><TextField id="outlined-basic" label="Additional Details" variant="outlined" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyProfile;