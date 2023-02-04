import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./Quotes.css";
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

const Quotes = () => {
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
            <div className='container mt-3'>
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
        </>
    )
}

export default Quotes;