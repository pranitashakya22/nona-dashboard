import Button from '@mui/material/Button';
import { RiDashboardFill } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa6";
import { AiFillProduct } from "react-icons/ai";
import { FaCartArrowDown } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { IoLogOutOutline } from "react-icons/io5";
import { MyContext } from '../../App';



const Sidebar =()=>{

    const [activeTab, setActiveTab] = useState(0);
    const [isToggleSubmenu, setisToggleSubmenu] = useState(false);

    const context = useContext(MyContext);

    const isOpenSubmenu = (index)=>{
        setActiveTab(index);
        setisToggleSubmenu(!isToggleSubmenu)
    }

    return(
        <>
        <div className="sidebar">
            <ul>
                <li>
                <Link to="/">
                <Button className={`w-100 ${activeTab===0 ? 'active' : ''}`} onClick={()=>isOpenSubmenu(0)}>
                 <span className='icon'><RiDashboardFill/></span> 
                 Dashboard 
                 <span className='arrow'><FaAngleRight/></span>
                </Button>
                </Link>
                </li>
                <li>
                <Button className={`w-100 ${activeTab===1 && isToggleSubmenu===true ? 'active' : ''}`} onClick={()=>isOpenSubmenu(1)}>
                 <span className='icon'><AiFillProduct/></span> 
                 Products 
                 <span className='arrow'><FaAngleRight/></span>
                </Button>
                <div className={`submenuWrapper ${activeTab===1 && isToggleSubmenu===true ? 'colapse': 'colapsed'}`}>
                <ul className='submenu'>
                    <li><Link to="#">Product List</Link></li>
                    <li><Link to="#">Product View</Link></li>
                    <li><Link to="#">Product Upload</Link></li>
                </ul>
                </div>                
                </li>
                <li>
                <Link to="/">
                <Button className={`w-100 ${activeTab===2 ? 'active' : ''}`} onClick={()=>isOpenSubmenu(2)}>
                 <span className='icon'><FaCartArrowDown/></span> 
                 Orders 
                 <span className='arrow'><FaAngleRight/></span>
                </Button>
                </Link>
                </li>
                <li>
                <Link to="/">
                <Button className={`w-100 ${activeTab===3 ? 'active' : ''}`} onClick={()=>isOpenSubmenu(3)}>
                 <span className='icon'><MdMessage/></span> 
                 Messages 
                 <span className='arrow'><FaAngleRight/></span>
                </Button>
                </Link>
                </li>
                <li>
                <Link to="/">
                <Button className={`w-100 ${activeTab===4 ? 'active' : ''}`} onClick={()=>isOpenSubmenu(4)}>
                 <span className='icon'><FaBell/></span> 
                 Notification 
                 <span className='arrow'><FaAngleRight/></span>
                </Button>
                </Link>
                </li>
                <li>
                <Link to="/">
                <Button className={`w-100 ${activeTab===5 ? 'active' : ''}`} onClick={()=>isOpenSubmenu(5)}>
                 <span className='icon'><IoMdSettings/></span> 
                 Settings 
                 <span className='arrow'><FaAngleRight/></span>
                </Button>
                </Link>
                </li>
            </ul>


            <br/>
            <div className='logoutWrapper'>
            <div className='logoutBox'>
                <Button variant='contained'><IoLogOutOutline/> Logout</Button>
            </div>
            </div>
        </div>
        </>
    )
}


export default Sidebar;