import React from "react";
import "./ViewProject.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ReactApexChart from 'react-apexcharts';
import Slide from '@mui/material/Slide';
import Divider from '@mui/material/Divider';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import { TextField } from '@mui/material';
import { useState } from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`
    };
}

const ViewProject = props => {

    const [radioButton, setRadioButton] = useState(true);
    const [edit, setEdit] = React.useState(false);
    const [age, setAge] = React.useState('');
    const [valueTask, setValueTask] = React.useState(null);
    const [addRequest, setAddRequest] = useState(false);
    const [addRequestTask, setAddRequestTask] = useState(false);
    const [value, setValue] = React.useState(0);
    const [state, setState] = React.useState({
        series: [44, 55, 41, 17],
        options: {
            chart: {
                width: 380,
                type: 'donut',
            },
            plotOptions: {
                pie: {
                    startAngle: -90,
                    endAngle: 270
                }
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: 'gradient',
            },
            legend: {
                formatter: function (val, opts) {
                    const Names = ['In progress', 'Completed', 'To do', 'Overdue']
                    return Names[opts.seriesIndex] + " - " + opts.w.globals.series[opts.seriesIndex]
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },
    })

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const addRequestOpen = () => {
        setAddRequest(true);
    };

    const addRequestClose = () => {
        setAddRequest(false);
    };
    const addRequestOpenTask = () => {
        setAddRequestTask(true);
    };

    const addRequestCloseTask = () => {
        setAddRequestTask(false);
    };
    const handleChangeAddTAsk = (event) => {
        setAge(event.target.value);
        setRadioButton(false);
    };
    const handleChangeRadio = () => {
        setRadioButton(!radioButton);
    };

    const handleClickEditTask = () => {
        setEdit(true);
    };

    const handleCloseEditTask = () => {
        setEdit(false);
    };

    return (<>
        <div className='container'>
            <div className='row'>
                <div className='p-1'>
                    <div className='project-main-line-graph-div px-3'>
                        <div className='d-flex justify-content-between'>
                            <div className='py-3 project-top-left-div'>
                                <div>
                                    <div className='d-flex justify-content-between'>
                                        <h5 className='project-fabric-heading'>Fabrication and Supply of Tanks- Type A</h5>
                                        <p className='m-0 project-on-progress-btn'>On progress</p>
                                    </div>
                                    <p className='p-0 mt-2 mb-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p></div>
                            </div>
                            <div className='d-flex py-3 justify-content-between project-top-right-div'>
                                <div>
                                    <button className='project-left-div-btn' style={{ fontSize: "13px" }} onClick={addRequestOpen} >Add Member</button>
                                    <div>
                                        <Dialog
                                            open={addRequest}
                                            TransitionComponent={Transition}
                                            keepMounted
                                            onClose={addRequestClose}
                                            aria-describedby="alert-dialog-slide-description"
                                        >
                                            <DialogTitle>
                                                <div className='d-flex align-items-center justify-content-between'>
                                                    <div>
                                                        <label>New Member</label>
                                                        <Radio
                                                            checked={radioButton}
                                                            onChange={handleChangeRadio}
                                                            name="radio-buttons"
                                                            inputProps={{ 'aria-label': 'A' }}
                                                        />
                                                        <label>existing</label>
                                                        <Radio
                                                            checked={!radioButton}
                                                            onChange={handleChangeRadio}
                                                            name="radio-buttons"
                                                            inputProps={{ 'aria-label': 'B' }}
                                                        />
                                                    </div>
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
                                                    {radioButton ? <> <TextField fullWidth className='my-2' label="First Name" />
                                                        <TextField fullWidth className='my-2' label="Last Name" />
                                                        <TextField fullWidth className='my-2' label="Email" />
                                                        <TextField fullWidth className='my-2' label="Contact Number" variant='outlined' type="number" />
                                                        <TextField fullWidth className='my-2' type="file" /></> : <> <Box sx={{ minWidth: 120 }}>
                                                            <FormControl fullWidth>
                                                                <InputLabel id="demo-simple-select-label" size='normal'  >Member</InputLabel>
                                                                <Select
                                                                    labelId="demo-simple-select-label"
                                                                    id="demo-simple-select"
                                                                    value={age}
                                                                    label="Member"
                                                                    onChange={handleChangeAddTAsk}
                                                                >
                                                                    <MenuItem value={10}>Vishal</MenuItem>
                                                                    <MenuItem value={20}>vikash</MenuItem>
                                                                    <MenuItem value={30}>Aman</MenuItem>
                                                                    <MenuItem value={40}>Shubham</MenuItem>
                                                                    <MenuItem value={50}>Rahul</MenuItem>
                                                                </Select>
                                                            </FormControl>
                                                        </Box>

                                                    </>}
                                                </Box>
                                            </DialogContent>
                                            <DialogActions>
                                                <div className='px-3'>
                                                    <button className='quotes-dialog-btn me-2' onClick={addRequestClose}>Cancel</button>
                                                    <button className='quotes-dialog-btn' onClick={addRequestClose}>Save</button>
                                                </div>
                                            </DialogActions>
                                        </Dialog>
                                    </div>
                                </div>
                                <div>
                                    <button className='project-left-div-btn' style={{ fontSize: "13px" }} onClick={addRequestOpenTask} >Add Task</button>
                                    <div>
                                        <Dialog
                                            open={addRequestTask}
                                            TransitionComponent={Transition}
                                            keepMounted
                                            onClose={addRequestCloseTask}
                                            aria-describedby="alert-dialog-slide-description"
                                        >
                                            <DialogTitle>
                                                <div className='d-flex align-items-center justify-content-between'>
                                                    <p className='p-0 m-0'>Add Tasks</p>
                                                    <CloseIcon onClick={addRequestCloseTask} style={{ cursor: 'pointer' }} />
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
                                                    <Box sx={{ minWidth: 120 }}>
                                                        <FormControl fullWidth>
                                                            <InputLabel id="demo-simple-select-label" size='normal'  >Member</InputLabel>
                                                            <Select

                                                                labelId="demo-simple-select-label"
                                                                id="demo-simple-select"
                                                                value={age}
                                                                label="Member"
                                                                onChange={handleChangeAddTAsk}
                                                            >
                                                                <MenuItem value={10}>Vishal</MenuItem>
                                                                <MenuItem value={20}>vikash</MenuItem>
                                                                <MenuItem value={30}>Aman</MenuItem>
                                                                <MenuItem value={40}>Shubham</MenuItem>
                                                                <MenuItem value={50}>Rahul</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Box>
                                                    <TextField fullWidth className='my-2' label="Title " />
                                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                        <DatePicker
                                                            className="w-100 py-1"
                                                            label="Due Date"
                                                            value={valueTask}
                                                            onChange={(newValue) => {
                                                                setValueTask(newValue);
                                                            }}
                                                            renderInput={(params) => <TextField {...params} />}
                                                        />
                                                    </LocalizationProvider>
                                                    <textarea rows="3" class="form-control form-control-alternative pt-2" placeholder="Description"></textarea>
                                                </Box>
                                            </DialogContent>
                                            <DialogActions>
                                                <div className='px-3'>
                                                    <button className='quotes-dialog-btn me-2' onClick={addRequestCloseTask}>Cancel</button>
                                                    <button className='quotes-dialog-btn' onClick={addRequestCloseTask}>Save</button>
                                                </div>
                                            </DialogActions>
                                        </Dialog>
                                    </div>
                                </div>
                                <div>
                                    <MoreVertIcon />
                                </div>
                            </div>
                        </div>
                        <div className='py-2'>
                            <div className='project-top-left-div d-flex justify-content-between align-items-center'>
                                <div className='task-and-date-div'>
                                    <h5 className='project-task-and-date-heading'>29 Jan, 2022</h5>
                                    <p className='project-task-and-date-info'>Due date</p>
                                </div>
                                <div className='task-and-date-div'>
                                    <h5 className='project-task-and-date-heading'>74</h5>
                                    <p className='project-task-and-date-info'>Open tasks</p>
                                </div>
                                <div className='task-and-date-div'>
                                    <h5 className='project-task-and-date-heading'>123040 MRU</h5>
                                    <p className='project-task-and-date-info'>Open tasks</p>
                                </div>
                            </div>
                        </div>              <div className='pt-2 pb-4 d-flex align-items-center justify-content-start'>
                            <AvatarGroup total={24}>
                                <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/5.jpg" />
                                <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/4.jpg" />
                                <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/2.jpg" />
                                <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/2.jpg" />
                            </AvatarGroup>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='container'><div className=''>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons
                        allowScrollButtonsMobile
                        aria-label="scrollable force tabs example"
                    >
                        <Tab className="project-tabs-style" label="Overview" {...a11yProps(0)} />
                        <Tab className="project-tabs-style" label="Tasks" {...a11yProps(1)} />
                        <Tab className="project-tabs-style" label="Members" {...a11yProps(2)} />
                        <Tab className="project-tabs-style" label="Spendings" {...a11yProps(3)} />
                        <Tab className="project-tabs-style" label="Activity" {...a11yProps(4)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <div className='container pt-0'>
                        <div className='row'>
                            <div className='col-lg-5 px-3'>
                                <div className='project-main-line-graph-div'>
                                    <div className='d-flex align-items-center justify-content-between '>
                                        <h5 className='project-fabric-heading p-0 m-0'>Task Summary</h5>
                                        <button className='project-btn'><NavLink to="/task-summary" className="text-white text-decoration-none" >View all</NavLink></button>
                                    </div>
                                    <div id="chart">
                                        <ReactApexChart options={state.options} series={state.series} type="donut" width={380} />
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-7 px-3'>
                                <div className='project-main-line-graph-div'>
                                    <div className='d-flex align-items-center justify-content-between p-2'>
                                        <h5 className='project-fabric-heading p-0 m-0'>Task In Progress</h5>
                                        <button className='project-btn'>View all</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12 p-1 pe-3'>
                                <div className='quotes-main-line-graph-div'>
                                    <div className='px-3'>
                                        <div className='py-3 d-flex align-items-center justify-content-between'>
                                            <p className='p-0 m-0 quotes-heading'>Add Tasks List</p>
                                            <div className='d-flex'>
                                                <TextField
                                                    label="Search"
                                                    id="outlined-size-small"
                                                    size="small"
                                                />
                                            </div>
                                        </div>
                                        <div >
                                            <table className='w-100 '>
                                                <tr>
                                                    <th>Serial No</th>
                                                    <th>Task Name</th>
                                                    <th>description</th>
                                                    <th>Due Date</th>
                                                    <th>Status</th>
                                                    <th>Delete</th>
                                                </tr>
                                                <tr>
                                                    <td >1</td>
                                                    <td>Todo</td>
                                                    <td>you have devlop this project</td>
                                                    <td>01/03/2023</td>
                                                    <td>Pending</td>
                                                    <td><DeleteIcon onClick={() => alert("Are you sure you want to delete?")} /></td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Todo</td>
                                                    <td>you have devlop this project</td>
                                                    <td>09/02/2023</td>
                                                    <td>In Progress</td>
                                                    <td><DeleteIcon onClick={() => alert("Are you sure you want to delete?")} /></td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Todo</td>
                                                    <td>you have devlop this project</td>
                                                    <td>15/02/2023</td>
                                                    <td>On Hold</td>
                                                    <td><DeleteIcon onClick={() => alert("Are you sure you want to delete?")} /></td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>Todo</td>
                                                    <td>you have devlop this project</td>
                                                    <td>20/01/2023</td>
                                                    <td>Cancelled</td>
                                                    <td><DeleteIcon onClick={() => alert("Are you sure you want to delete?")} /></td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12 p-1 pe-3'>
                                <div className='quotes-main-line-graph-div'>
                                    <div className='px-3'>
                                        <div className='py-3 d-flex align-items-center justify-content-between'>
                                            <p className='p-0 m-0 quotes-heading'>Add Members List</p>
                                            <div className='d-flex'>
                                                <TextField
                                                    label="Search"
                                                    id="outlined-size-small"
                                                    size="small"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <table className='w-100 '>
                                                <tr>
                                                    <th>Serial No</th>
                                                    <th>Members Name</th>
                                                    <th>Members Photo</th>
                                                    <th>Number of Task</th>
                                                    <th>Action</th>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Vishal</td>
                                                    <td> <img src="https://mui.com/static/images/avatar/5.jpg" alt="Avatar" className="listImages" /></td>

                                                    <td>15</td>
                                                    <td><><EditIcon onClick={handleClickEditTask} /> <DeleteIcon onClick={() => alert("Are you sure you want to delete?")} /></></td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Lorem</td>
                                                    <td> <img src="https://mui.com/static/images/avatar/2.jpg" alt="Avatar" className="listImages" /></td>
                                                    <td>20</td>
                                                    <td><><EditIcon onClick={handleClickEditTask} /> <DeleteIcon onClick={() => alert("Are you sure you want to delete?")} /></></td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Shubham</td>
                                                    <td> <img src="https://mui.com/static/images/avatar/5.jpg" alt="Avatar" className="listImages" /></td>
                                                    <td>25</td>
                                                    <td><><EditIcon onClick={handleClickEditTask} /> <DeleteIcon onClick={() => alert("Are you sure you want to delete?")} /></></td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>akash</td>
                                                    <td> <img src="https://mui.com/static/images/avatar/2.jpg" alt="Avatar" className="listImages" /></td>
                                                    <td>30</td>
                                                    <td><><EditIcon onClick={handleClickEditTask} /> <DeleteIcon onClick={() => alert("Are you sure you want to delete?")} /></></td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Dialog
                            open={edit}
                            TransitionComponent={Transition}
                            keepMounted
                            onClose={handleClickEditTask}
                            aria-describedby="alert-dialog-slide-description"
                        >
                            <DialogTitle>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <p className='p-0 m-0'>Edit Members List </p>
                                    <CloseIcon onClick={handleCloseEditTask} style={{ cursor: 'pointer' }} />
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
                                    <TextField fullWidth className='mb-2' label="member Name" size='normal' />
                                    <TextField fullWidth className='my-2' label="no.of Task" variant='outlined' type="number" />
                                    <TextField fullWidth className='my-2' type="file" />
                                </Box>
                            </DialogContent>
                            <DialogActions>
                                <div className='px-3'>
                                    <button className='quotes-dialog-btn me-2' onClick={handleCloseEditTask}>Cancel</button>
                                    <button className='quotes-dialog-btn' onClick={handleCloseEditTask}>Save</button>
                                </div>
                            </DialogActions>
                        </Dialog>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Tab-4
                </TabPanel>
                <TabPanel value={value} index={4}>
                    Tab-5
                </TabPanel>
            </Box>
        </div>
        </div>
    </>)
}

export default ViewProject;