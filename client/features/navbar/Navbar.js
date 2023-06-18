import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { logout } from '../../app/store';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    < >
            {/* <video autoplay muted loop id="video">
                <source src={"NavVid.mp4"} type="video/mp4"/>
              </video> */}
      <nav>
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <button type="button" onClick={logoutAndRedirectHome}>
              Logout
            </button>
          </div>
        ) : (
          <div className='flex justify-between items-center'>
            

            {/* The navbar will show these links before you log in */}
            <Link to="/"><h1 className='shadow-custom indent text-5xl'>MalcMind</h1></Link>
            <div className='text-2xl shadow-custom'>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            </div>
          </div>
        )}

      </nav>
      <hr />
    </>
  );
};

export default Navbar;
