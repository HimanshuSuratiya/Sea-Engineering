import React from 'react';
import "./Project.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ReactApexChart from 'react-apexcharts';

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

const Project = props => {
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
      <section className='project-main-line-graph-div mt-5'>
        <div className='container'>
          <div className=''>
            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                  className='main-tab'
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
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-5 px-3'>
                      <div className='project-main-line-graph-div'>
                        <div className='d-flex align-items-center justify-content-between p-2'>
                          <h5 className='project-fabric-heading p-0 m-0'>Task Summary</h5>
                          <button className='project-btn'>View all</button>
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
                Tab-2
              </TabPanel>
              <TabPanel value={value} index={2}>
                Tab-3
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
      </section>
    </>
  )
}

export default Project;