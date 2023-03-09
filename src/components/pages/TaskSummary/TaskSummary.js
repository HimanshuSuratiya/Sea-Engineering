import React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const TaskSummary = props => {

    const [addRequestTask, setAddRequestTask] = useState(false);
    const [age, setAge] = React.useState('');
    const [valueTask, setValueTask] = React.useState(null);

    const Card = () => {

        return (
            <div className='project-progress-main-card-div mb-4'>
                <div className='py-3 px-2 project-progress-inner-main-div'>
                    <p className='p-0 m-0 my-2 project-progress-tag'>Tag</p>
                    <h4 className='p-0 m-0 my-2 project-progress-title'>Task title</h4>
                    <p className='p-0 m-0 my-2 project-progress-text-info'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                    <div className='d-flex align-items-center justify-content-start'>
                        <AvatarGroup className='avtar-image-div'>
                            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/5.jpg" />
                            <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/4.jpg" />
                            <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/2.jpg" />
                            <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/2.jpg" />
                        </AvatarGroup>
                    </div>
                </div>
            </div>
        )
    }

    const addRequestOpenTask = () => {
        setAddRequestTask(true);
    };

    const addRequestCloseTask = () => {
        setAddRequestTask(false);
    };
    const handleChangeAddTAsk = (event) => {
        setAge(event.target.value);
    };

    return (<>
        <div className='container'>
            <div className='row'>
                <div className='p-1 d-flex align-items-center justify-content-between'>
                    <div className='project-progress-width project-progress-to-do pb-2'>
                        <div className='d-flex align-items-center justify-content-between'>
                            <h5 className='p-0- m-0 project-progress-heading'>To do</h5>
                            <h5 className='p-0- m-0 project-progress-heading'>3</h5>
                        </div>
                    </div>
                    <div className='project-progress-width project-progress-in-progress pb-2'>
                        <div className='d-flex align-items-center justify-content-between'>
                            <h5 className='p-0- m-0 project-progress-heading'>In progress</h5>
                            <h5 className='p-0- m-0 project-progress-heading'>6</h5>
                        </div>
                    </div>
                    <div className='project-progress-width project-progress-completed pb-2'>
                        <div className='d-flex align-items-center justify-content-between'>
                            <h5 className='p-0- m-0 project-progress-heading'>Completed</h5>
                            <h5 className='p-0- m-0 project-progress-heading'>9</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='container mt-2'>
            <div className='row'>
                <div className='p-1 d-flex justify-content-between'>
                    <div className='project-progress-width'>
                        <Card />
                        <Card />
                        <Card />
                        <button className='project-progress-craete-task-btn w-100 ' onClick={addRequestOpenTask} >Create Task</button>
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
                    <div className='project-progress-width'>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                    <div className='project-progress-width'>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
        </div>

    </>)

}
export default TaskSummary;