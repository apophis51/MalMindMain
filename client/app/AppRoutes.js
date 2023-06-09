import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AuthForm from '../features/auth/AuthForm';
import Home from '../features/home/Home';
import { me } from './store';
import NewHome from '../features/home/NewHome';
import { renderThree } from '../features/ThreeExample.js/secondThreejsModel.js';
import { Box } from '../features/ThreeExample.js/firstThreejsModel.js';


/**
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      
      {isLoggedIn ? (
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route to="/home" element={<Home />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/*" element={<NewHome/>}/>
          <Route path="/login" element={<AuthForm name="login" displayName="Login" />}/>
          <Route path="/signup"element={<AuthForm name="signup" displayName="Sign Up" />} />
          <Route path="/render"element={<renderThree/>} />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
