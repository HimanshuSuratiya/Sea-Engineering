import React from 'react';
import "./Project.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

const Project = props => {
  return (
    <>
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
                    <p className='p-0 mt-2 mb-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                  </div>
                </div>
                <div className='d-flex py-3 justify-content-between project-top-right-div'>
                  <div>
                    <button className='project-left-div-btn'>Add Member</button>
                    <button className='project-left-div-btn'>Add Task</button>
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
              </div>
              <div className='pt-2 pb-4 d-flex align-items-center justify-content-start'>
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
    </>
  )
}

export default Project;