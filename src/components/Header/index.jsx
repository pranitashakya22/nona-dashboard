import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/NonabazzarLogo.jpg';
import Button from '@mui/material/Button';
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import SearchBar from "../SearchBar/index.jsx";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import userImg from '../../assets/images/userImg.jpg';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';
import { RiLockPasswordFill } from "react-icons/ri";
import { Divider } from "@mui/material";
import notificUser from '../../assets/images/notificationUser.jpg';
import { MyContext } from "../../App.js";



const Header = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [isOpenNotificationDrop, setisOpenNotificationDrop] = useState(false);
    const openMyAcc = Boolean(anchorEl);
    const openNotification = Boolean(isOpenNotificationDrop);


    const context = useContext(MyContext);

    const handleOpenMyAccDrop = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMyAccDrop = () => {
        setAnchorEl(null);
    };
    const handleOpenNotificationDrop = (event) => {
        setisOpenNotificationDrop(true);
    };
    const handleCloseNotificationDrop = (event) => {
        setisOpenNotificationDrop(false);
    };


    return (
        <>
            <header className="d-flex align-items-center">
                <div className="container-fluid w-100">
                    <div className="row d-flex align-items-center w-100">
                        {/* Logo Wrapper */}
                        <div className="col-sm-2 sec1">
                            <Link to={'/'} className="logo">
                                <img src={logo} alt="logo" />
                            </Link>
                        </div>

                        <div className="col-sm-3 d-flex align-items-center sec2">
                            <Button className="rounded-circle me-3" onClick={() => context.setisToggleSidebar(!context.isToggleSidebar)}>
                                {
                                    context.isToggleSidebar === false ? <MdMenuOpen /> : <MdOutlineMenu />
                                }

                            </Button>
                            <SearchBar />
                        </div>

                        <div className="col-sm-7 d-flex align-items-center justify-content-end sec3">
                            <Button className="rounded-circle me-3"><MdLightMode /></Button>
                            <Button className="rounded-circle me-3"><FaShoppingCart /></Button>

                            <Button className="rounded-circle me-3"><MdEmail /></Button>

                            <div className="notificationWrapper position-relative">
                                <Button className="rounded-circle me-3" onClick={handleOpenNotificationDrop}><FaRegBell /></Button>
                                <Menu
                                    anchorEl={isOpenNotificationDrop}
                                    className="notifications notific_dropdown"
                                    id="notifications"
                                    open={openNotification}
                                    onClose={handleCloseNotificationDrop}
                                    onClick={handleCloseNotificationDrop}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >

                                    <div className="head ps-3 pb-0">
                                        <h4>Orders (12) </h4>
                                    </div>
                                    <Divider className="mb-1" />

                                    <div className="scroll">
                                        <MenuItem onClick={handleCloseNotificationDrop}>
                                            <div className="d-flex">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src={notificUser} alt="admin profile" />
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Pranita Shakya</b> added to her favorite list <b>iphone case</b>
                                                        </span>
                                                    </h4>
                                                    <p className="text-sky">few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>
                                        <MenuItem onClick={handleCloseNotificationDrop}>
                                            <div className="d-flex">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src={notificUser} alt="admin profile" />
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Pranita Shakya</b> added to her favorite list <b>iphone case</b>
                                                        </span>
                                                    </h4>
                                                    <p className="text-sky">few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>
                                        <MenuItem onClick={handleCloseNotificationDrop}>
                                            <div className="d-flex">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src={notificUser} alt="admin profile" />
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Pranita Shakya</b> added to her favorite list <b>iphone case</b>
                                                        </span>
                                                    </h4>
                                                    <p className="text-sky">few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>
                                        <MenuItem onClick={handleCloseNotificationDrop}>
                                            <div className="d-flex">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src={notificUser} alt="admin profile" />
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Pranita Shakya</b> added to her favorite list <b>iphone case</b>
                                                        </span>
                                                    </h4>
                                                    <p className="text-sky">few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>
                                        <MenuItem onClick={handleCloseNotificationDrop}>
                                            <div className="d-flex">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src={notificUser} alt="admin profile" />
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Pranita Shakya</b> added to her favorite list <b>iphone case</b>
                                                        </span>
                                                    </h4>
                                                    <p className="text-sky">few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>
                                        <MenuItem onClick={handleCloseNotificationDrop}>
                                            <div className="d-flex">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src={notificUser} alt="admin profile" />
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Pranita Shakya</b> added to her favorite list <b>iphone case</b>
                                                        </span>
                                                    </h4>
                                                    <p className="text-sky">few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>
                                        <MenuItem onClick={handleCloseNotificationDrop}>
                                            <div className="d-flex">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src={notificUser} alt="admin profile" />
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Pranita Shakya</b> added to her favorite list <b>iphone case</b>
                                                        </span>
                                                    </h4>
                                                    <p className="text-sky">few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>
                                        <MenuItem onClick={handleCloseNotificationDrop}>
                                            <div className="d-flex">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src={notificUser} alt="admin profile" />
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Pranita Shakya</b> added to her favorite list <b>iphone case</b>
                                                        </span>
                                                    </h4>
                                                    <p className="text-sky">few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>
                                    </div>


                                    <div className="ps-3 pe-3 w-100 pt-2 pb-1">
                                        <Button className="btn-blue w-100">View all notifications</Button>
                                        
                                    </div>


                                </Menu>
                            </div>

                            {
                                context.isLogin !== true ? 
                                <Link to={'/login'}> <Button className="btn-blue btn-lg btn-round">Sign In</Button></Link>
                                    :
                                    <div className="myAccWrapper">
                                        <Button className="myAcc d-flex align-items-center" onClick={handleOpenMyAccDrop}>
                                            <div className="userImg">
                                                <span className="rounded-circle">
                                                    <img src={userImg} alt="admin profile" />
                                                </span>
                                            </div>

                                            <div className="userInfo">
                                                <h4>Admin User</h4>
                                                <p className="mb-0">@admin25</p>

                                            </div>
                                        </Button>
                                        <Menu
                                            anchorEl={anchorEl}
                                            className="account-name"
                                            id="account-menu"
                                            open={openMyAcc}
                                            onClose={handleCloseMyAccDrop}
                                            onClick={handleCloseMyAccDrop}
                                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                        >

                                            <MenuItem onClick={handleCloseMyAccDrop}>
                                                <ListItemIcon>
                                                    <PersonAdd fontSize="small" />
                                                </ListItemIcon>
                                                My Account
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseMyAccDrop}>
                                                <ListItemIcon>
                                                    <RiLockPasswordFill fontSize="large" />
                                                </ListItemIcon>
                                                Reset Password
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseMyAccDrop}>
                                                <ListItemIcon>
                                                    <Logout fontSize="small" />
                                                </ListItemIcon>
                                                Logout
                                            </MenuItem>
                                        </Menu>
                                    </div>

                            }








                        </div>

                    </div>
                </div>
            </header>

        </>
    )
}


export default Header;