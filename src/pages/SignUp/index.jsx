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

import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";


import googleLogo from '../../assets/images/GoogleImage.png';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const SignUp = ()=>{
    const [inputIndex, setInputIndex] = useState(null);
    const [isShowPassword, setisShowPassword] = useState(false);
    const [isConfirmPassword, setisConfirmPassword] = useState(false);
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
        <div className="loginSec signupSec">
            <div className="loginBox">
                <div className="logo text-center">
                    <Link to={'/dashboard'}><img src={Logo} alt="logo" /></Link>
                    <h5 className='font-weight-bold'>Register to Nonabazzar Admin</h5>
                </div>

                <div className="wrapper mt-3 card border">
                    <form>
                    <div className={`form-group position-relative ${inputIndex===0 && 'focus'}`}>
                            <span className="icon"><FaUserCircle/></span>
                            <input type="text" className='form-control' placeholder='Enter your name' onFocus={()=>focusInput(0)} onBlur={()=>setInputIndex(null)}/>
                        </div>
                        <div className={`form-group position-relative ${inputIndex===1 && 'focus'}`}>
                            <span className="icon"><MdEmail/></span>
                            <input type="text" className='form-control' placeholder='Enter your email' onFocus={()=>focusInput(1)} onBlur={()=>setInputIndex(null)}/>
                        </div>
                        <div className={`form-group position-relative ${inputIndex===2 && 'focus'}`}>
                            <span className="icon"><RiLockPasswordLine /></span>
                            <input type={`${isShowPassword===true ? 'text': 'password'}`} className='form-control' placeholder='Enter Password' onFocus={()=>focusInput(2)} onBlur={()=>setInputIndex(null)}/>
                            <span className="toggleShowPassword" onClick={()=>setisShowPassword(!isShowPassword)}>
                                {
                                    isShowPassword===true ? <IoMdEyeOff/> : <IoMdEye/>
                                }
                                
                            </span>
                        </div>
                        <div className={`form-group position-relative ${inputIndex===3 && 'focus'}`}>
                            <span className="icon"><RiLockPasswordFill /></span>
                            <input type={`${isConfirmPassword===true ? 'text': 'password'}`} className='form-control' placeholder='Confirm Password' onFocus={()=>focusInput(3)} onBlur={()=>setInputIndex(null)}/>
                            <span className="toggleShowPassword" onClick={()=>setisConfirmPassword(!isConfirmPassword)}>
                                {
                                    isConfirmPassword===true ? <IoMdEyeOff/> : <IoMdEye/>
                                }
                                
                            </span>
                        </div>
                        <FormControlLabel control={<Checkbox />} label="I agree to the terms and conditions" />


                        <div className="form-group">
                            <Button className="btn-blue btn-lg w-100 btn-big">Sign Up</Button>
                        </div>

                        <div className="form-group text-center mb-0">

                            <div className="d-flex align-items-center justify-content-center or mt-3 mb-3">
                                <span className="line"></span>
                                <span className="txt">or</span>
                                <span className="line"></span>
                            </div>

                            <Button className='w-100 btn-lg loginWithGoogle btn-big' variant='outlined' ><img src={googleLogo} width="25px" alt="google icon" /> &nbsp; SIGN UP WITH GOOGLE</Button>

                        </div>
                    </form>
                    <span className="text-center d-block mt-3">
                        Already have an account?
                        <Link to={'/login'} className='link color ms-2'>Sign in</Link>
                    </span>

                </div>

             

            </div>
        </div>
        </>
    )
}


export default SignUp;