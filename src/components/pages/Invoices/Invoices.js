import React from 'react';
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
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import EditIcon from '@mui/icons-material/Edit';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { NavLink } from 'react-router-dom';

function createData(serial_no, invoice_Date, invoice_no, address, client_name, ViewDetails, action, status) {
    return {
        serial_no,
        invoice_Date,
        invoice_no,
        address,
        client_name,
        ViewDetails,
        action,
        status,
    };
}

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
        label: 'S-No',
    },
    {
        id: ' invoice_Date',
        numeric: true,
        disablePadding: false,
        label: ' invoice_Date',

    },
    {
        id: ' invoice_no',
        numeric: true,
        disablePadding: false,
        label: ' invoice_no',
    },
    {
        id: 'address',
        numeric: true,
        disablePadding: false,
        label: 'address',
    },
    {
        id: 'client_name',
        numeric: true,
        disablePadding: false,
        label: 'client_name',
    },
    {
        id: 'ViewDetails',
        numeric: true,
        disablePadding: false,
        label: 'ViewDetails',
    },
    {
        id: 'action',
        numeric: true,
        disablePadding: false,
        label: 'Action',
    },
    {
        id: 'status',
        numeric: true,
        disablePadding: false,
        label: 'Status',
    },
];

function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
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
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
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
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    Invoices
                </Typography>
            )}
            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton>
                        <FilterListIcon />
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
}

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

const Invoices = () => {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [activeInactive, setActiveInactive] = React.useState(true)

    const rows = [
        createData(1, '13/02/2023', '45', "Noida sector 59", "vishal", <NavLink to="/invoice-detail"><VisibilityIcon /></NavLink>, <><EditIcon /> <DeleteIcon /></>, <BootstrapSwitchButton
            width={100}
            onlabel='Active'
            offlabel='Inactive'
            onstyle="success"
            onChange={() => {
                setActiveInactive(!activeInactive);
            }}
        />),
        createData(2, '14/02/2023', '46', "Noida sector 58", "shubham", <NavLink to="/invoice-detail"><VisibilityIcon /></NavLink>, <><EditIcon /> <DeleteIcon /></>, <BootstrapSwitchButton
            width={100}
            onlabel='Active'
            offlabel='Inactive'
            onstyle="success"
            onChange={() => {
                setActiveInactive(!activeInactive);
            }}
        />),
        createData(3, '15/02/2023', '47', "Noida sector 57", "rajesh", <NavLink to="/invoice-detail"><VisibilityIcon /></NavLink>, <><EditIcon /> <DeleteIcon /></>, <BootstrapSwitchButton
            width={100}
            onlabel='Active'
            offlabel='Inactive'
            onstyle="success"
            onChange={() => {
                setActiveInactive(!activeInactive);
            }}
        />),
        createData(4, '16/02/2023', '48', "Noida sector 56", "vikash", <NavLink to="/invoice-detail"><VisibilityIcon /></NavLink>, <><EditIcon /> <DeleteIcon /></>, <BootstrapSwitchButton
            width={100}
            onlabel='Active'
            offlabel='Inactive'
            onstyle="success"
            onChange={() => {
                setActiveInactive(!activeInactive);
            }}
        />),
        createData(5, '17/02/2023', '49', "Noida sector 55", "ankit", <NavLink to="/invoice-detail"><VisibilityIcon /></NavLink>, <><EditIcon /> <DeleteIcon /></>, <BootstrapSwitchButton
            width={100}
            onlabel='Active'
            offlabel='Inactive'
            onstyle="success"
            onChange={() => {
                setActiveInactive(!activeInactive);
            }}
        />),
        createData(6, '18/02/2023', '50', "Noida sector 54", "vinod", <NavLink to="/invoice-detail"><VisibilityIcon class="text-center" /></NavLink>, <><EditIcon /> <DeleteIcon /></>, <BootstrapSwitchButton
            width={100}
            onlabel='Active'
            offlabel='Inactive'
            onstyle="success"
            onChange={() => {
                setActiveInactive(!activeInactive);
            }}
        />),
        createData(7, '19/02/2023', '51', "Noida sector 53", "atul", <NavLink to="/invoice-detail"><VisibilityIcon /></NavLink>, <><EditIcon /> <DeleteIcon /></>, <BootstrapSwitchButton
            width={100}
            onlabel='Active'
            offlabel='Inactive'
            onstyle="success"
            onChange={() => {
                setActiveInactive(!activeInactive);
            }}
        />),
        createData(8, '20/02/2023', '52', "Noida sector 52", "mukesh", <NavLink to="/invoice-detail"><VisibilityIcon /></NavLink>, <><EditIcon /> <DeleteIcon /></>, <BootstrapSwitchButton
            width={100}
            onlabel='Active'
            offlabel='Inactive'
            onstyle="success"
            onChange={() => {
                setActiveInactive(!activeInactive);
            }}
        />),
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

    return (
        <>
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
                                                <TableCell
                                                    component="th"
                                                    id={labelId}
                                                    scope="row"
                                                    padding="none"
                                                    onClick={(event) => handleClick(event, row.serial_no)}
                                                >
                                                    {row.serial_no}
                                                </TableCell>
                                                <TableCell align="center" onClick={(event) => handleClick(event, row.serial_no)}>{row.invoice_Date}</TableCell>
                                                <TableCell align="center" onClick={(event) => handleClick(event, row.serial_no)}>{row.invoice_no}</TableCell>
                                                <TableCell align="center" onClick={(event) => handleClick(event, row.serial_no)}>{row.address}</TableCell>
                                                <TableCell align="center" onClick={(event) => handleClick(event, row.serial_no)}>{row.client_name}</TableCell>

                                                <TableCell align="center" onClick={(event) => handleClick(event, row.serial_no)}>{row.ViewDetails}</TableCell>
                                                <TableCell align="center">{row.action}</TableCell>
                                                <TableCell align="center">{row.status}</TableCell>
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
        </>
    )
}

export default Invoices;