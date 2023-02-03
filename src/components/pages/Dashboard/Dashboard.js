import React, { useState } from 'react';
import "./Dashboard.css";
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Chart from "react-apexcharts";

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


const Dashboard = () => {
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
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            },
            {
                name: "series-2",
                data: [48, 20, 75, 40, 90, 25, 55, 42]
            }
        ]
    }
    )
    return (
        <>
            <div className='px-1'>
                <p className='p-0 m-0 dashboard-heading'>Hello Elwely</p>
            </div>
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col-lg-3 text-center p-1'>
                        <div className='dashboard-main-top-card d-flex align-items-center ps-3'>
                            <CircularProgressWithLabel style={{ height: '60px', width: '60px', color: '#61996a' }} value={53} />
                        </div>
                    </div>
                    <div className='col-lg-3 text-center p-1'>
                        <div className='dashboard-main-top-card d-flex align-items-center ps-3'>
                            <div className='dashboard-calender-icon-div d-flex align-items-center justify-content-center'>
                                <ListAltIcon style={{ color: '#5091eb', fontSize: '40px' }} />
                            </div>
                            <div className='ps-3 dashboard-calender-text-div'>
                                <p className='p-0 m-0 dashboard-Pending-Quoatations'>Pending Quoatations</p>
                                <p className='p-0 m-0 dashboard-Pending-Quoatations-value'>34</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 text-center p-1'>
                        <div className='dashboard-main-top-card d-flex align-items-center ps-3'>
                            <div className='dashboard-calender-icon-div d-flex align-items-center justify-content-center'>
                                <ListAltIcon style={{ color: '#5091eb', fontSize: '40px' }} />
                            </div>
                            <div className='ps-3 dashboard-calender-text-div'>
                                <p className='p-0 m-0 dashboard-Pending-Quoatations'>Pending Quoatations</p>
                                <p className='p-0 m-0 dashboard-Pending-Quoatations-value'>34</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 text-center p-1'>
                        <div className='dashboard-main-top-card d-flex align-items-center ps-3'>
                            <div className='dashboard-calender-icon-div d-flex align-items-center justify-content-center'>
                                <ListAltIcon style={{ color: '#5091eb', fontSize: '40px' }} />
                            </div>
                            <div className='ps-3 dashboard-calender-text-div'>
                                <p className='p-0 m-0 dashboard-Pending-Quoatations'>Pending Quoatations</p>
                                <p className='p-0 m-0 dashboard-Pending-Quoatations-value'>34</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <Chart
                            options={state.options}
                            series={state.series}
                            type="bar"
                            width="500"
                        />
                    </div>
                    <div className='col-lg-6'>
                        <Chart
                            options={state.options}
                            series={state.series}
                            type="line"
                            width="500"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;