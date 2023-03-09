// import React from 'react';
// import "./Project.css";
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import Avatar from '@mui/material/Avatar';
// import AvatarGroup from '@mui/material/AvatarGroup';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import ReactApexChart from 'react-apexcharts';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;
//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`
//   };
// }

// const Project = props => {
//   const [value, setValue] = React.useState(0);
//   const [state, setState] = React.useState({
//     series: [44, 55, 41, 17],
//     options: {
//       chart: {
//         width: 380,
//         type: 'donut',
//       },
//       plotOptions: {
//         pie: {
//           startAngle: -90,
//           endAngle: 270
//         }
//       },
//       dataLabels: {
//         enabled: false
//       },
//       fill: {
//         type: 'gradient',
//       },
//       legend: {
//         formatter: function (val, opts) {
//           const Names = ['In progress', 'Completed', 'To do', 'Overdue']
//           return Names[opts.seriesIndex] + " - " + opts.w.globals.series[opts.seriesIndex]
//         }
//       },
//       responsive: [{
//         breakpoint: 480,
//         options: {
//           chart: {
//             width: 200
//           },
//           legend: {
//             position: 'bottom'
//           }
//         }
//       }]
//     },
//   })

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <>
//       <div className='container'>
//         <div className='row'>
//           <div className='p-1'>
//             <div className='project-main-line-graph-div px-3'>
//               <div className='d-flex justify-content-between'>
//                 <div className='py-3 project-top-left-div'>
//                   <div>
//                       <p className='m-0 project-on-progress-btn'>On progress</p>
//                     </div>
//                     <p className='p-0 mt-2 mb-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
//                   </div>
//                 </div>
//                 <div className='d-flex py-3 justify-content-between project-top-right-div'>
//                   <div>
//                     <button className='project-left-div-btn'>Add Member</button>
//                     <button className='project-left-div-btn'>Add Task</button>
//                   </div>
//                   <div>
//                     <MoreVertIcon />
//                   </div>
//                 </div>
//               </div>
//               <div className='py-2'>
//                 <div className='project-top-left-div d-flex justify-content-between align-items-center'>
//                   <div className='task-and-date-div'>
//                     <h5 className='project-task-and-date-heading'>29 Jan, 2022</h5>
//                     <p className='project-task-and-date-info'>Due date</p>
//                   </div>
//                   <div className='task-and-date-div'>
//                     <h5 className='project-task-and-date-heading'>74</h5>
//                     <p className='project-task-and-date-info'>Open tasks</p>
//                   </div>
//                   <div className='task-and-date-div'>
//                     <h5 className='project-task-and-date-heading'>123040 MRU</h5>
//                     <p className='project-task-and-date-info'>Open tasks</p>
//                   </div>
//                 </div>
//               </div>
//               <div className='pt-2 pb-4 d-flex align-items-center justify-content-start'>
//                 <AvatarGroup total={24}>
//                   <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/5.jpg" />
//                   <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/4.jpg" />
//                   <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/2.jpg" />
//                   <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/2.jpg" />
//                 </AvatarGroup>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <section className='project-main-line-graph-div mt-5'>
//         <div className='container'>
//           <div className=''>
//             <Box sx={{ width: '100%' }}>
//               <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//                 <Tabs
//                   className='main-tab'
//                   value={value}
//                   onChange={handleChange}
//                   variant="scrollable"
//                   scrollButtons
//                   allowScrollButtonsMobile
//                   aria-label="scrollable force tabs example"
//                 >
//                   <Tab className="project-tabs-style" label="Overview" {...a11yProps(0)} />
//                   <Tab className="project-tabs-style" label="Tasks" {...a11yProps(1)} />
//                   <Tab className="project-tabs-style" label="Members" {...a11yProps(2)} />
//                   <Tab className="project-tabs-style" label="Spendings" {...a11yProps(3)} />
//                   <Tab className="project-tabs-style" label="Activity" {...a11yProps(4)} />
//                 </Tabs>
//               </Box>
//               <TabPanel value={value} index={0}>
//                 <div className='container'>
//                   <div className='row'>
//                     <div className='col-lg-5 px-3'>
//                       <div className='project-main-line-graph-div'>
//                         <div className='d-flex align-items-center justify-content-between p-2'>
//                           <h5 className='project-fabric-heading p-0 m-0'>Task Summary</h5>
//                           <button className='project-btn'>View all</button>
//                         </div>
//                         <div id="chart">
//                           <ReactApexChart options={state.options} series={state.series} type="donut" width={380} />
//                         </div>
//                       </div>
//                     </div>
//                     <div className='col-lg-7 px-3'>
//                       <div className='project-main-line-graph-div'>
//                         <div className='d-flex align-items-center justify-content-between p-2'>
//                           <h5 className='project-fabric-heading p-0 m-0'>Task In Progress</h5>
//                           <button className='project-btn'>View all</button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </TabPanel>
//               <TabPanel value={value} index={1}>
//                 Tab-2
//               </TabPanel>
//               <TabPanel value={value} index={2}>
//                 Tab-3
//               </TabPanel>
//               <TabPanel value={value} index={3}>
//                 Tab-4
//               </TabPanel>
//               <TabPanel value={value} index={4}>
//                 Tab-5
//               </TabPanel>
//             </Box>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Project;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import { visuallyHidden } from '@mui/utils';
import EditIcon from '@mui/icons-material/Edit';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import AddIcon from '@mui/icons-material/Add';
import Slide from '@mui/material/Slide';
import Divider from '@mui/material/Divider';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import { TextField } from '@mui/material';
import { NavLink } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './AllProject.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'serial_no',
    numeric: false,
    disablePadding: true,
    label: 'SNo.',
  },
  {
    id: 'Project_Name',
    numeric: true,
    disablePadding: false,
    label: 'Project Name',
  },
  {
    id: ' Client_Name',
    numeric: true,
    disablePadding: false,
    label: ' Client',
  },
  {
    id: 'Due Date',
    numeric: true,
    disablePadding: false,
    label: 'Due Date',
  },
  {
    id: 'Task',
    numeric: true,
    disablePadding: false,
    label: 'Tasks',
  },

  {
    id: 'Status',
    numeric: true,
    disablePadding: false,
    label: 'Status',
  },
  {
    id: 'View',
    numeric: true,
    disablePadding: false,
    label: 'View',
  },
  {
    id: 'Action',
    numeric: true,
    disablePadding: false,
    label: 'Action',
  },
  {
    id: 'Active Inactive',
    numeric: true,
    disablePadding: false,
    label: 'Active/Inactive',
  },

];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead >
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            sx={{ padding: '0px', margin: '0px', fontSize: '20px', color: 'rgb(117, 117, 117)' }}
            key={headCell.id}
            align={headCell.numeric ? 'center' : 'right'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h5"
          id="tableTitle"
          component="div"
        >
          All Project
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <>
          <TextField
            label="Search"
            id="outlined-size-small"
            size="small"
          />
        </>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const AllProject = () => {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [activeInactive, setActiveInactive] = React.useState(true)
  const [addRequest, setAddRequest] = useState(false);
  const [addRequestEdit, setAddRequestEdit] = useState(false);
  const [age, setAge] = React.useState('');
  const [dropDown, setDropDown] = React.useState('');
  const [valueEdit, setValueEdit] = React.useState(null);
  const [valueAdd, setValueAdd] = React.useState(null);
  const [edit, setEdit] = React.useState(false);

  const handleChangeDropDown = (event) => {
    setDropDown(event.target.value);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const addRequestOpenEdit = () => {
    setAddRequestEdit(true);
  };

  const addRequestCloseEdit = () => {
    setAddRequestEdit(false);
  };

  const handleClickEdit = () => {
    setEdit(true);
  };

  const handleCloseEdit = () => {
    setEdit(false);
  };

  const rows = [
    {
      serial_no: 1,
      Project_Name: 'Todo',
      Client_Name: 'Vishal',
      Due_Date: '26/02/2023',
      Task: 30,
      Status: 'On Hold',
      View: <NavLink to="/view-project"><VisibilityIcon /></NavLink>,
      Action: <><EditIcon onClick={handleClickEdit} /> <DeleteIcon onClick={() => alert("Are you sure you want to delete?")} /></>,
      Active_Inactive: <BootstrapSwitchButton
        width={100}
        onlabel='Active'
        offlabel='Inactive'
        onstyle="success"
        onChange={() => {
          setActiveInactive(!activeInactive);
        }}
      />,
    },
    {
      serial_no: 2,
      Project_Name: 'Todo-2',
      Client_Name: 'Vishal-2',
      Due_Date: '26/02/2023-2',
      Task: 30,
      Status: 'Completed',
      View: <NavLink to="/view-project"><VisibilityIcon /></NavLink>,
      Action: <><EditIcon onClick={handleClickEdit} /> <DeleteIcon onClick={() => alert("Are you sure you want to delete?")} /></>,
      Active_Inactive: <BootstrapSwitchButton
        width={100}
        onlabel='Active'
        offlabel='Inactive'
        onstyle="success"
        onChange={() => {
          setActiveInactive(!activeInactive);
        }}
      />,
    },
    {
      serial_no: 3,
      Project_Name: 'Todo-3',
      Client_Name: 'Vishal-3',
      Due_Date: '26/02/2023-3',
      Task: 30,
      Status: 'Cancelled',
      View: <NavLink to="/view-project"><VisibilityIcon /></NavLink>,
      Action: <><EditIcon onClick={handleClickEdit} /> <DeleteIcon onClick={() => alert("Are you sure you want to delete?")} /></>,
      Active_Inactive: <BootstrapSwitchButton
        width={100}
        onlabel='Active'
        offlabel='Inactive'
        onstyle="success"
        onChange={() => {
          setActiveInactive(!activeInactive);
        }}
      />,
    },
    {
      serial_no: 4,
      Project_Name: 'Todo-4',
      Client_Name: 'Vishal-4',
      Due_Date: '26/02/2023-4',
      Task: 30,
      Status: 'In Progress',
      View: <NavLink to="/view-project"><VisibilityIcon /></NavLink>,
      Action: <><EditIcon onClick={handleClickEdit} /> <DeleteIcon onClick={() => alert("Are you sure you want to delete?")} /></>,
      Active_Inactive: <BootstrapSwitchButton
        width={100}
        onlabel='Active'
        offlabel='Inactive'
        onstyle="success"
        onChange={() => {
          setActiveInactive(!activeInactive);
        }}
      />,
    },
    {
      serial_no: 5,
      Project_Name: 'Todo-5',
      Client_Name: 'Vishal-5',
      Due_Date: '26/02/2023-5',
      Task: 30,
      Status: 'In Progress',
      View: <NavLink to="/view-project"><VisibilityIcon /></NavLink>,
      Action: <><EditIcon onClick={handleClickEdit} /> <DeleteIcon onClick={() => alert("Are you sure you want to delete?")} /></>,
      Active_Inactive: <BootstrapSwitchButton
        width={100}
        onlabel='Active'
        offlabel='Inactive'
        onstyle="success"
        onChange={() => {
          setActiveInactive(!activeInactive);
        }}
      />,
    },
  ];

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.serial_no);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, serial_no) => {
    const selectedIndex = selected.indexOf(serial_no);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, serial_no);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (serial_no) => selected.indexOf(serial_no) !== -1;
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  const addRequestOpen = () => {
    setAddRequest(true);
  };

  const addRequestClose = () => {
    setAddRequest(false);
  };


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 text-end  my-3">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <FormControl sx={{ m: 1, width: 250 }} size="small">
                  <InputLabel id="demo-select-small">Project Types</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    defaultValue={10}
                    // value={dropDown}
                    label="Project Types"
                    onChange={handleChangeDropDown}
                  >
                    <MenuItem value={10} >All</MenuItem>
                    <MenuItem value={20}>InProgress</MenuItem>
                    <MenuItem value={30}>Completed</MenuItem>
                    <MenuItem value={40}>On Hold</MenuItem>
                    <MenuItem value={50}>Cancelled</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div>
                <button className='ms-2 addNew-btn' onClick={addRequestOpen} style={{ fontSize: "13px" }}  ><AddIcon /> Add New</button>
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
                <DialogTitle>
                  <div className='d-flex align-items-center justify-content-between'>
                    <p className='p-0 m-0'>New Project Form</p>
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
                    <TextField fullWidth className='mb-2' label="Project Name" size='normal' />
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" size='normal'  >Client Name</InputLabel>
                        <Select

                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={age}
                          label="Client Name"
                          onChange={handleChange}
                        >
                          <MenuItem value={10}>Vishal</MenuItem>
                          <MenuItem value={20}>vikash</MenuItem>
                          <MenuItem value={30}>Aman</MenuItem>
                          <MenuItem value={40}>Shubham</MenuItem>
                          <MenuItem value={50}>Rahul</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        className="w-100 mt-2"
                        label="Due Date"
                        value={valueAdd}
                        onChange={(newValue) => {
                          setValueAdd(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} size='normal' />}
                      />
                    </LocalizationProvider>
                    <textarea rows="3" class="form-control form-control-alternative mt-2" placeholder="Description" size='normal' ></textarea>
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
          <div classname="container">
            <div className="row">
              <div className="col-12">
                <Box sx={{ width: '100%' }}>
                  <Paper sx={{ width: '100%', mb: 2 }}>
                    <EnhancedTableToolbar numSelected={selected.length} />
                    <TableContainer>
                      <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                      >
                        <EnhancedTableHead
                          className="p-0 !impotat"
                          numSelected={selected.length}
                          order={order}
                          orderBy={orderBy}
                          onSelectAllClick={handleSelectAllClick}
                          onRequestSort={handleRequestSort}
                          rowCount={rows.length}
                        />
                        <TableBody>
                          {stableSort(rows, getComparator(order, orderBy))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => {
                              const isItemSelected = isSelected(row.serial_no);
                              const labelId = `enhanced-table-checkbox-${index}`;

                              return (
                                <TableRow
                                  hover
                                  role="checkbox"
                                  aria-checked={isItemSelected}
                                  tabIndex={-1}
                                  key={row.serial_no}
                                  selected={isItemSelected}
                                >
                                  <TableCell padding="checkbox" onClick={(event) => handleClick(event, row.serial_no)}>
                                    <Checkbox
                                      color="primary"
                                      checked={isItemSelected}
                                      inputProps={{
                                        'aria-labelledby': labelId,

                                      }}
                                    />
                                  </TableCell>
                                  <TableCell align="center"
                                    component="th"
                                    id={labelId}
                                    scope="row"
                                    padding="none"
                                    onClick={(event) => handleClick(event, row.serial_no)}
                                  >
                                    {row.serial_no}
                                  </TableCell>
                                  <TableCell align="center" onClick={(event) => handleClick(event, row.serial_no)}>{row.Project_Name}</TableCell>
                                  <TableCell align="center" onClick={(event) => handleClick(event, row.serial_no)}>{row.Client_Name}</TableCell>
                                  <TableCell align="center" onClick={(event) => handleClick(event, row.serial_no)}>{row.Due_Date}</TableCell>
                                  <TableCell align="center" onClick={(event) => handleClick(event, row.serial_no)}>{row.Task}</TableCell>
                                  <TableCell align="center" onClick={(event) => handleClick(event, row.serial_no)}>{row.Status}</TableCell>
                                  <TableCell align="center" onClick={(event) => handleClick(event, row.serial_no)}>{row.View}</TableCell>
                                  <TableCell align="center">{row.Action}</TableCell>
                                  <TableCell align="center">{row.Active_Inactive}</TableCell>
                                </TableRow>
                              );
                            })}
                          {emptyRows > 0 && (
                            <TableRow
                              style={{
                                height: (dense ? 33 : 53) * emptyRows,
                              }}
                            >
                              <TableCell colSpan={6} />
                            </TableRow>
                          )}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    <TablePagination
                      rowsPerPageOptions={[5, 10, 25]}
                      component="div"
                      count={rows.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      onPageChange={handleChangePage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                  </Paper>
                </Box>
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
          onClose={handleCloseEdit}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>
            <div className='d-flex align-items-center justify-content-between'>
              <p className='p-0 m-0'>Create Project </p>
              <CloseIcon onClick={handleCloseEdit} style={{ cursor: 'pointer' }} />
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
              <TextField fullWidth className='mb-2' label="Project Name" size='normal' />
              <TextField fullWidth className='mb-2' label="Client  Name" size='normal' />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  className="w-100 mt-2"
                  label="Due Date"
                  value={valueAdd}
                  onChange={(newValue) => {
                    setValueAdd(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} size='normal' />}
                />
              </LocalizationProvider>
              <textarea rows="3" class="form-control form-control-alternative mt-2" placeholder="Description" size='normal' ></textarea>
            </Box>
          </DialogContent>
          <DialogActions>
            <div className='px-3'>
              <button className='quotes-dialog-btn me-2' onClick={handleCloseEdit}>Cancel</button>
              <button className='quotes-dialog-btn' onClick={handleCloseEdit}>Save</button>
            </div>
          </DialogActions>
        </Dialog>
      </div>
    </>
  )
}

export default AllProject;