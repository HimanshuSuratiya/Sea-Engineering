import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./Quotes.css";
import Chart from "react-apexcharts";
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import axios from "axios";
import EditIcon from '@mui/icons-material/Edit';
import { useEffect } from 'react';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function CircularProgressWithLabel(props) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" {...props} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="caption" component="div" color="text.secondary">
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Box>
        </Box>
    );
}

const defaultState = {
    projectName: '',
    address: '',
    description: '',


}


const Quotes = () => {

    const [stateData, setStateData] = useState(defaultState);
    const [dataList, setDataList] = useState([]);
    const [state, setState] = useState({
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
        },
        series: [
            {
                name: "Received request",
                data: [30, 40, 45, 50, 49, 60, 70, 91, 45]
            },
            {
                name: "Created quotes",
                data: [48, 20, 75, 40, 90, 25, 55, 42, 74]
            },
            {
                name: "Accepted quotes",
                data: [15, 28, 82, 17, 59, 47, 75, 66, 44]
            },
            {
                name: "Canceled request",
                data: [45, 86, 74, 86, 15, 85, 24, 45, 90]
            }
        ]
    }
    )
    const [addRequest, setAddRequest] = useState(false);
    const [selectOptions, setSelectOptions] = useState(null);

    const openOptions = Boolean(selectOptions);

    const handleClickSelectOptions = (event) => {
        setSelectOptions(event.currentTarget);
    };
    const handleCloseSelectOptions = () => {
        setSelectOptions(null);
    };

    const addRequestOpen = () => {
        setAddRequest(true);
    };

    const addRequestClose = () => {
        setAddRequest(false);
    };

    const quotesData = (event) => {
        const { name, value } = event.target;
        setStateData((prevState) => {
            return {
                ...prevState,
                [name]: value,
            }
        })
    }
    const submitData = (e) => {
        console.log("submit data");
        e.preventDefault();
        var bearerToken = localStorage.getItem("token");

        axios.post("http://69.49.235.253:8069/api/quotes/", {
            project_name: stateData.projectName,
            address: stateData.address,
            description: stateData.description

        }, {
            headers: { 'Authorization': "Bearer " + bearerToken }
        }
        )
            .then((response) => {
                console.log(response);

            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        var bearerToken = localStorage.getItem("token");

        axios.get("http://69.49.235.253:8069/api/listquotes/", {

            headers: { 'Authorization': "Bearer " + bearerToken }

        }).then((response) => {

            setDataList(response.data.data);


        }).catch((error) => {
            console.log(error);
        });

    }, [])


    // useEffect(() => {

    //     var bearerToken = localStorage.getItem("token");

    //     axios.put("http://69.49.235.253:8069/api/updatequotes/2", {

    //         headers: { 'Authorization': "Bearer " + bearerToken }

    //     }).then((response) => {

    //         console.log(response.data)


    //     }).catch((error) => {

    //         console.log(error);

    //     });

    // }, [])



    const handleDropDownOptions = () => {
        return (
            <>
                <div >
                    <Button

                        id="basic-button"
                        aria-controls={openOptions ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openOptions ? 'true' : undefined}
                        onClick={handleClickSelectOptions}
                    >
                        <MoreVertIcon />
                    </Button>
                    <Menu
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                border: "solid 0px gray",
                                color: "#188dc7"
                            }
                        }}
                        id="basic-menu"
                        anchorEl={selectOptions}
                        open={openOptions}
                        onClose={handleCloseSelectOptions}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleCloseSelectOptions} >Profile</MenuItem>
                        <MenuItem onClick={handleCloseSelectOptions}>My account</MenuItem>
                        <MenuItem onClick={handleCloseSelectOptions}>Logout</MenuItem>
                    </Menu>
                </div>
            </>
        )
    }

    const selectUser = (id) => {
        console.log(">>>>>>>>>>>>>>>>>>>>>" + dataList[id])

        setAddRequest(true);

    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 text-center p-1'>
                        <div className='quotes-main-top-card d-flex align-items-center ps-3'>
                            <CircularProgressWithLabel style={{ height: '60px', width: '60px', color: '#61996a' }} value={65} />
                            <div className='ps-3 quotes-text-div d-flex align-items-end quotes-text-value-bold'>14.312</div>
                        </div>
                        <div className='quotes-main-top-card d-flex align-items-center ps-3 mt-3'>
                            <CircularProgressWithLabel style={{ height: '60px', width: '60px', color: '#61996a' }} value={75} />
                            <div className='ps-3 quotes-text-div d-flex align-items-end quotes-text-value-bold'>15.254</div>
                        </div>
                        <div className='quotes-main-top-card d-flex align-items-center ps-3 mt-3'>
                            <CircularProgressWithLabel style={{ height: '60px', width: '60px', color: '#61996a' }} value={25} />
                            <div className='ps-3 quotes-text-div d-flex align-items-end quotes-text-value-bold'>99.785</div>
                        </div>
                    </div>
                    <div className='col-lg-3 text-center p-1'>
                        <div className='quotes-main-top-card d-flex align-items-center ps-3'>
                            <CircularProgressWithLabel style={{ height: '60px', width: '60px', color: '#61996a' }} value={45} />
                            <div className='ps-3 quotes-text-div d-flex align-items-end quotes-text-value-bold'>1.256</div>
                        </div>
                        <div className='quotes-main-top-card d-flex align-items-center ps-3 mt-3'>
                            <CircularProgressWithLabel style={{ height: '60px', width: '60px', color: '#61996a' }} value={0} />
                            <div className='ps-3 quotes-text-div d-flex align-items-end quotes-text-value-bold'>0.000</div>
                        </div>
                    </div>
                    <div className='col-lg-3 text-center p-1'>
                        <div className='quotes-main-top-card d-flex align-items-center ps-3'>
                            <CircularProgressWithLabel style={{ height: '60px', width: '60px', color: '#61996a' }} value={47} />
                            <div className='ps-3 quotes-text-div d-flex align-items-end quotes-text-value-bold'>13.254</div>
                        </div>
                        <div className='quotes-main-top-card d-flex align-items-center ps-3 mt-3'>
                            <CircularProgressWithLabel style={{ height: '60px', width: '60px', color: '#61996a' }} value={38} />
                            <div className='ps-3 quotes-text-div d-flex align-items-end quotes-text-value-bold'>4.312</div>
                        </div>
                    </div>
                    <div className='col-lg-3 text-center p-1'>
                        <div className='quotes-main-top-card d-flex align-items-center ps-3'>
                            <CircularProgressWithLabel style={{ height: '60px', width: '60px', color: '#61996a' }} value={57} />
                            <div className='ps-3 quotes-text-div d-flex align-items-end quotes-text-value-bold'>52.215</div>
                        </div>
                        <div className='quotes-main-top-card d-flex align-items-center ps-3 mt-3'>
                            <CircularProgressWithLabel style={{ height: '60px', width: '60px', color: '#61996a' }} value={100} />
                            <div className='ps-3 quotes-text-div d-flex align-items-end quotes-text-value-bold'>100.000</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-lg-12 p-1'>
                        <div className='quotes-main-line-graph-div pe-3'>
                            <div className='px-1 py-3'>
                                <p className='p-0 m-0 quotes-heading'>Statistics</p>
                            </div>
                            <Chart
                                options={state.options}
                                series={state.series}
                                type="line"
                                width="100%"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-lg-6 p-1 pe-3'>
                        <div className='quotes-main-line-graph-div'>
                            <div className='px-3'>
                                <div className='py-3 d-flex align-items-center justify-content-between'>
                                    <p className='p-0 m-0 quotes-heading'>Requests</p>
                                    <div className='d-flex'>
                                        <button className='me-2 quotes-btn'>View all</button>
                                        <button className='ms-2 quotes-btn' onClick={addRequestOpen}><AddIcon /> Add New</button>

                                    </div>
                                </div>
                                <div>
                                    <table className='w-100'>

                                        <tr>
                                            <th>Id</th>
                                            <th>Project Name</th>
                                            <th>Description</th>
                                            <th>Address</th>
                                            <th>Operations</th>

                                        </tr>

                                        {

                                            dataList.map(item => {
                                                const { id, project_name, description, address } = item;
                                                return (
                                                    <tr key={id}>
                                                        <td>{id}</td>
                                                        <td>{project_name}</td>
                                                        <td>{description}</td>
                                                        <td>{address}</td>
                                                        <td><EditIcon onClick={() => selectUser(item.id)} /></td>

                                                    </tr>
                                                )



                                            })

                                        }

                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 p-1 pe-3'>
                        <div className='quotes-main-line-graph-div'>
                            <div className='px-3'>
                                <div className='py-3 d-flex align-items-center justify-content-between'>
                                    <p className='p-0 m-0 quotes-heading'>Quotes</p>
                                    <button className='quotes-btn'>View all</button>
                                </div>
                                <div>
                                    <table className='w-100'>

                                        <tr>
                                            <th>Id</th>
                                            <th>Project Name</th>
                                            <th>Description</th>
                                            <th>Address</th>

                                        </tr>

                                        {

                                            dataList.map(item => {
                                                const { id, project_name, description, address } = item;
                                                return (
                                                    <tr key={id}>
                                                        <td>{id}</td>
                                                        <td>{project_name}</td>
                                                        <td>{description}</td>
                                                        <td>{address}</td>

                                                    </tr>
                                                )



                                            })

                                        }

                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div>
                <Dialog
                    open={addRequest}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={addRequestClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <form onSubmit={submitData}>
                        <DialogTitle>
                            <div className='d-flex align-items-center justify-content-between'>

                                <p className='p-0 m-0'>New Request Quote Form</p>
                                <CloseIcon onClick={addRequestClose} style={{ cursor: 'pointer' }} />
                            </div>
                        </DialogTitle>
                        <Divider style={{ backgroundColor: 'gray' }} />
                        <DialogContent>
                            <Box
                                sx={{
                                    width: 500,
                                    maxWidth: '100%',
                                }}
                            >
                                <TextField fullWidth className='my-2' label="Project Name" name="projectName" value={stateData.projectName} onChange={quotesData} />
                                <TextField fullWidth className='my-2' label="Address" name="address" value={stateData.address} onChange={quotesData} />
                                <textarea rows="3" class="form-control form-control-alternative pt-2" name="description" value={stateData.description} onChange={quotesData} placeholder="Description"></textarea>
                            </Box>

                        </DialogContent>
                        <DialogActions>
                            <div className='px-3'>
                                <button className='quotes-dialog-btn me-2' onClick={addRequestClose}>Cancel</button>
                                <button type="submit" className='quotes-dialog-btn'>Send</button>
                            </div>
                        </DialogActions>
                    </form>
                </Dialog>
            </div>
        </>
    )
}

export default Quotes;