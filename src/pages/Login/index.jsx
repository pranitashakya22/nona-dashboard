import { useContext, useEffect, useState } from 'react';
import Logo from '../../assets/images/NonabazzarLogo.jpg';
import { MyContext } from '../../App';
import bgpattern from '../../assets/images/background-pattern.jpg';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import googleLogo from '../../assets/images/GoogleImage.png';



const Login = () =>{

    const [inputIndex, setInputIndex] = useState(null);
    const [isShowPassword, setisShowPassword] = useState(false);
    const context = useContext(MyContext)


    useEffect(()=>{
        context.setisHideSidebarandNavbar(true);

    },[]);

    const focusInput = (index)=>{
        setInputIndex(index);
    }

    return(
        <>
        <img src={bgpattern} alt="background pattern"  className='loginBgPattern'/>
        <div className="loginSec">
            <div className="loginBox">
                <div className="logo text-center">
                <Link to={'/dashboard'}><img src={Logo} alt="logo" /></Link>
                    <h5 className='font-weight-bold'>Login to Nonabzzar Admin</h5>
                </div>

                <div className="wrapper mt-3 card border">
                    <form>
                        <div className={`form-group position-relative ${inputIndex===0 && 'focus'}`}>
                            <span className="icon"><MdEmail/></span>
                            <input type="text" className='form-control' placeholder='Enter your email' onFocus={()=>focusInput(0)} onBlur={()=>setInputIndex(null)}/>
                        </div>
                        <div className={`form-group position-relative ${inputIndex===1 && 'focus'}`}>
                            <span className="icon"><RiLockPasswordLine /></span>
                            <input type={`${isShowPassword===true ? 'text': 'password'}`} className='form-control' placeholder='Enter Password' onFocus={()=>focusInput(1)} onBlur={()=>setInputIndex(null)}/>
                            <span className="toggleShowPassword" onClick={()=>setisShowPassword(!isShowPassword)}>
                                {
                                    isShowPassword===true ? <IoMdEyeOff/> : <IoMdEye/>
                                }
                                
                            </span>
                        </div>

                        <div className="form-group">
                            <Button className="btn-blue btn-lg w-100 btn-big">Sign In</Button>
                        </div>

                        <div className="form-group text-center mb-0">
                            <Link to={'/forgot-password'} className='link'>FORGOT PASSWORD</Link>

                            <div className="d-flex align-items-center justify-content-center or mt-3 mb-3">
                                <span className="line"></span>
                                <span className="txt">or</span>
                                <span className="line"></span>
                            </div>

                            <Button className='w-100 btn-lg loginWithGoogle btn-big' variant='outlined' ><img src={googleLogo} width="25px" alt="google icon" /> &nbsp; SIGN IN WITH GOOGLE</Button>

                        </div>
                    </form>
                </div>

                <div className="wrapper mt-3 card border footer p-3">
                    <span className="text-center">
                        Don't have an account?
                        <Link to={'/signup'} className='link color ms-2'>Register</Link>
                    </span>

                </div>

            </div>
        </div>
        </>
    )
}

export default Login;