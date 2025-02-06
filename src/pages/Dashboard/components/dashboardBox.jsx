import { Button } from "@mui/material";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useContext, useEffect, useState } from "react";
import { IoIosTimer } from "react-icons/io";
import { MyContext } from "../../../App";



const DashboardBox = (props) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const ITEM_HEIGHT = 48;

    const context = useContext(MyContext);

    useEffect(()=>{
        context.setisHideSidebarandNavbar(false);
    },[])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button className="dashboardBox" style={{
                backgroundImage: `linear-gradient(to right, ${props.color?.[0]},  ${props.color?.[1]})`
            }}>

                {
                    props.grow === true ?
                        <span className="chart"><FaArrowTrendUp /></span>

                        :
                        <span className="chart"><FaArrowTrendDown /></span>

                }

                <div className="d-flex w-100">
                    <div className="col1">
                        <h4 className="text-white">Total Users</h4>
                        <span className="text-white">277</span>
                    </div>

                    <div className="ms-auto">
                        {
                            props.icon ?
                                <span className="icon">
                                    {props.icon ? props.icon : ''}
                                </span>

                                :
                                ''

                        }
                    </div>

                </div>

                <div className="d-flex align-items-center w-100 bottomElement">
                    <h6 className="text-white mb-0 mt-0">Last Month</h6>
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
                                   <IoIosTimer/> Last Day
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                   <IoIosTimer/> Last Week
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                   <IoIosTimer/> Last Month
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                   <IoIosTimer/> Last Year
                                </MenuItem>
                        </Menu>
                    </div>
                </div>
            </Button>
        </>
    )
}

export default DashboardBox;