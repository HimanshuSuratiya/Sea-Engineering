import React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

const TaskSummary = props => {

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
                        <button className='project-progress-craete-task-btn w-100'>Create Task</button>
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