import DashboardBox from "./components/dashboardBox";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdShoppingBag } from "react-icons/md";
import { GiStarsStack } from "react-icons/gi";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import { IoIosTimer } from "react-icons/io";
import { Button } from "@mui/material";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Chart } from "react-google-charts";

import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

import { FaEye } from "react-icons/fa6";
import { BsPencilFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

import carpet from '../../assets/images/carpet.jpg';
import Pagination from '@mui/material/Pagination';



export const data = [
    ["Year", "Sales", "Expenses"],
    ["2013", 1000, 400],
    ["2014", 1170, 460],
    ["2015", 660, 1120],
    ["2016", 1030, 540],
];

export const options = {
    'backgroundColor': 'transparent',
    'chartArea': { 'width': '100%', 'height': '100%' },
};


const Dashboard = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [showBy, setshowBy] = useState('');
    const [categoryBy, setCategoryBy] = useState('');
    const [brandBy, setBrandBy] = useState('');

    const open = Boolean(anchorEl);

    const ITEM_HEIGHT = 48;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <div className="right-content w-100">
                <div className="row dashboardBoxWrapperRow">
                    <div className="col-md-8">
                        <div className="dashboardBoxWrapper d-flex">
                            <DashboardBox color={["#1da256", "#48d483"]} icon={<FaUser />} grow={true} />
                            <DashboardBox color={["#c012e2", "#eb64fe"]} icon={<FaShoppingCart />} />
                            <DashboardBox color={["#2c78e5", "#60aff5"]} icon={<MdShoppingBag />} />
                            <DashboardBox color={["#e1950e", "#f3cd29"]} icon={<GiStarsStack />} />
                        </div>
                    </div>

                    <div className="col-md-4 ps-0">
                        <div className="box graphBox">
                            <div className="d-flex align-items-center w-100 bottomElement">
                                <h6 className="text-white mb-0 mt-0">Total Sales</h6>
                                <div className="ms-auto">
                                    <Button className="ms-auto toggleIcon" onClick={handleClick}><BsThreeDotsVertical /></Button>
                                    <Menu
                                        className="dropdownMenu"
                                        MenuListProps={{
                                            'aria-labelledby': 'long-button',
                                        }}
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        slotProps={{
                                            paper: {
                                                style: {
                                                    maxHeight: ITEM_HEIGHT * 4.5,
                                                    width: '20ch',
                                                },
                                            },
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>
                                            <IoIosTimer /> Last Day
                                        </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                            <IoIosTimer /> Last Week
                                        </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                            <IoIosTimer /> Last Month
                                        </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                            <IoIosTimer /> Last Year
                                        </MenuItem>
                                    </Menu>
                                </div>
                            </div>


                            <h3 className="text-white font-weight-bold">Rs 15,50,700.00</h3>
                            <p>Rs 1,89,500.00 in last month</p>


                            <Chart
                                chartType="PieChart"
                                width="100%"
                                height="170px"
                                data={data}
                                options={options}
                            />

                        </div>
                    </div>
                </div>

                <div className="card shadow border-0 p-3 mt-4">
                    <h3 className="hd">Best Selling Products</h3>

                    <div className="row cardFilters mt-3">
                        <div className="col col-md-3">
                            <h4>SHOW BY</h4>
                            <FormControl size="small" className="w-100">
                            <Select
                                value={showBy}
                                onChange={(event)=>setshowBy(event.target.value)}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                className="w-100"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            </FormControl>
                        </div>

                        <div className="col col-md-3">
                            <h4>CATEGORY BY</h4>
                            <FormControl size="small" className="w-100">
                            <Select
                                value={categoryBy}
                                onChange={(event)=>setCategoryBy(event.target.value)}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                className="w-100"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            </FormControl>
                        </div>

                        <div className="col col-md-3">
                            <h4>BRAND BY</h4>
                            <FormControl size="small" className="w-100">
                            <Select
                                value={brandBy}
                                onChange={(event)=>setBrandBy(event.target.value)}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                className="w-100"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            </FormControl>
                        </div>

                        <div className="col col-md-3">
                            <h4>SEARCH BY</h4>
                            <FormControl size="small" className="w-100">
                            <TextField id="outlined-basic" placeholder="Search..." variant="outlined" className="w-100" size="small"/>
                            </FormControl>
                        </div>
                    </div>


                    <div className="table-responsive mt-3">
                        <table className="table table-bordered v-align">
                            <thead className="thead-dark">
                                <tr>
                                    <th>UID</th>
                                    <th style={{width:'300px'}}>PRODUCT</th>
                                    <th>CATEGORY</th>
                                    <th>BRAND</th>
                                    <th>PRICE</th>
                                    <th>STOCK</th>
                                    <th>RATING</th>
                                    <th>ORDER</th>
                                    <th>SALES</th>
                                    <th>ACTIONS</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center prodBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src={carpet} alt="carpet" className="w-100"/>
                                                </div>
                                            </div>
                                            <div className="info ps-0">
                                            <h6>Handknitted Carpets...</h6>
                                            <p>Handknitted carpets knitted by the local poeple in Nepal.</p>
                                            </div>
                                        </div>
                                        </td>
                                    <td>carpets</td>
                                    <td>Mheecha</td>
                                    <td>
                                        <div style={{width:'100px'}}>
                                        <del className="old">Rs 35,000</del>
                                        <span className="new text-danger">Rs 31,000</span>
                                        </div>
                                        </td>
                                    <td>12</td>
                                    <td>4.9(16)</td>
                                    <td>137</td>
                                    <td>Rs 19k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className="secondary" color="secondary"><FaEye/></Button>
                                            <Button className="success" color="success"><BsPencilFill/></Button>
                                            <Button className="error" color="error"><MdDelete/></Button>

                                        </div>
                                    </td>

                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center prodBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src={carpet} alt="carpet" className="w-100"/>
                                                </div>
                                            </div>
                                            <div className="info ps-0">
                                            <h6>Handknitted Carpets...</h6>
                                            <p>Handknitted carpets knitted by the local poeple in Nepal.</p>
                                            </div>
                                        </div>
                                        </td>
                                    <td>carpets</td>
                                    <td>Mheecha</td>
                                    <td>
                                        <div style={{width:'100px'}}>
                                        <del className="old">Rs 35,000</del>
                                        <span className="new text-danger">Rs 31,000</span>
                                        </div>
                                        </td>
                                    <td>12</td>
                                    <td>4.9(16)</td>
                                    <td>137</td>
                                    <td>Rs 19k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className="secondary" color="secondary"><FaEye/></Button>
                                            <Button className="success" color="success"><BsPencilFill/></Button>
                                            <Button className="error" color="error"><MdDelete/></Button>

                                        </div>
                                    </td>

                                </tr>  <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center prodBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src={carpet} alt="carpet" className="w-100"/>
                                                </div>
                                            </div>
                                            <div className="info ps-0">
                                            <h6>Handknitted Carpets...</h6>
                                            <p>Handknitted carpets knitted by the local poeple in Nepal.</p>
                                            </div>
                                        </div>
                                        </td>
                                    <td>carpets</td>
                                    <td>Mheecha</td>
                                    <td>
                                        <div style={{width:'100px'}}>
                                        <del className="old">Rs 35,000</del>
                                        <span className="new text-danger">Rs 31,000</span>
                                        </div>
                                        </td>
                                    <td>12</td>
                                    <td>4.9(16)</td>
                                    <td>137</td>
                                    <td>Rs 19k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className="secondary" color="secondary"><FaEye/></Button>
                                            <Button className="success" color="success"><BsPencilFill/></Button>
                                            <Button className="error" color="error"><MdDelete/></Button>

                                        </div>
                                    </td>

                                </tr>  <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center prodBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src={carpet} alt="carpet" className="w-100"/>
                                                </div>
                                            </div>
                                            <div className="info ps-0">
                                            <h6>Handknitted Carpets...</h6>
                                            <p>Handknitted carpets knitted by the local poeple in Nepal.</p>
                                            </div>
                                        </div>
                                        </td>
                                    <td>carpets</td>
                                    <td>Mheecha</td>
                                    <td>
                                        <div style={{width:'100px'}}>
                                        <del className="old">Rs 35,000</del>
                                        <span className="new text-danger">Rs 31,000</span>
                                        </div>
                                        </td>
                                    <td>12</td>
                                    <td>4.9(16)</td>
                                    <td>137</td>
                                    <td>Rs 19k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className="secondary" color="secondary"><FaEye/></Button>
                                            <Button className="success" color="success"><BsPencilFill/></Button>
                                            <Button className="error" color="error"><MdDelete/></Button>

                                        </div>
                                    </td>

                                </tr>  <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center prodBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src={carpet} alt="carpet" className="w-100"/>
                                                </div>
                                            </div>
                                            <div className="info ps-0">
                                            <h6>Handknitted Carpets...</h6>
                                            <p>Handknitted carpets knitted by the local poeple in Nepal.</p>
                                            </div>
                                        </div>
                                        </td>
                                    <td>carpets</td>
                                    <td>Mheecha</td>
                                    <td>
                                        <div style={{width:'100px'}}>
                                        <del className="old">Rs 35,000</del>
                                        <span className="new text-danger">Rs 31,000</span>
                                        </div>
                                        </td>
                                    <td>12</td>
                                    <td>4.9(16)</td>
                                    <td>137</td>
                                    <td>Rs 19k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className="secondary" color="secondary"><FaEye/></Button>
                                            <Button className="success" color="success"><BsPencilFill/></Button>
                                            <Button className="error" color="error"><MdDelete/></Button>

                                        </div>
                                    </td>

                                </tr>  <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center prodBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src={carpet} alt="carpet" className="w-100"/>
                                                </div>
                                            </div>
                                            <div className="info ps-0">
                                            <h6>Handknitted Carpets...</h6>
                                            <p>Handknitted carpets knitted by the local poeple in Nepal.</p>
                                            </div>
                                        </div>
                                        </td>
                                    <td>carpets</td>
                                    <td>Mheecha</td>
                                    <td>
                                        <div style={{width:'100px'}}>
                                        <del className="old">Rs 35,000</del>
                                        <span className="new text-danger">Rs 31,000</span>
                                        </div>
                                        </td>
                                    <td>12</td>
                                    <td>4.9(16)</td>
                                    <td>137</td>
                                    <td>Rs 19k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className="secondary" color="secondary"><FaEye/></Button>
                                            <Button className="success" color="success"><BsPencilFill/></Button>
                                            <Button className="error" color="error"><MdDelete/></Button>

                                        </div>
                                    </td>

                                </tr>  <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center prodBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src={carpet} alt="carpet" className="w-100"/>
                                                </div>
                                            </div>
                                            <div className="info ps-0">
                                            <h6>Handknitted Carpets...</h6>
                                            <p>Handknitted carpets knitted by the local poeple in Nepal.</p>
                                            </div>
                                        </div>
                                        </td>
                                    <td>carpets</td>
                                    <td>Mheecha</td>
                                    <td>
                                        <div style={{width:'100px'}}>
                                        <del className="old">Rs 35,000</del>
                                        <span className="new text-danger">Rs 31,000</span>
                                        </div>
                                        </td>
                                    <td>12</td>
                                    <td>4.9(16)</td>
                                    <td>137</td>
                                    <td>Rs 19k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className="secondary" color="secondary"><FaEye/></Button>
                                            <Button className="success" color="success"><BsPencilFill/></Button>
                                            <Button className="error" color="error"><MdDelete/></Button>

                                        </div>
                                    </td>

                                </tr>  <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center prodBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src={carpet} alt="carpet" className="w-100"/>
                                                </div>
                                            </div>
                                            <div className="info ps-0">
                                            <h6>Handknitted Carpets...</h6>
                                            <p>Handknitted carpets knitted by the local poeple in Nepal.</p>
                                            </div>
                                        </div>
                                        </td>
                                    <td>carpets</td>
                                    <td>Mheecha</td>
                                    <td>
                                        <div style={{width:'100px'}}>
                                        <del className="old">Rs 35,000</del>
                                        <span className="new text-danger">Rs 31,000</span>
                                        </div>
                                        </td>
                                    <td>12</td>
                                    <td>4.9(16)</td>
                                    <td>137</td>
                                    <td>Rs 19k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className="secondary" color="secondary"><FaEye/></Button>
                                            <Button className="success" color="success"><BsPencilFill/></Button>
                                            <Button className="error" color="error"><MdDelete/></Button>

                                        </div>
                                    </td>

                                </tr>
                            </tbody>

                        </table>



                        <div className="d-flex tableFooter">
                        <p>showinf <b>12</b> of <b>60</b> results</p>
                        <Pagination count={50} color="primary" className="pagination" showFirstButton showLastButton />

                        </div>



                    </div>
                </div>
            </div>
        </>
    )

}

export default Dashboard;