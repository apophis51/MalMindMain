import React from 'react';
import Navbar from '../features/navbar/Navbar';
import AppRoutes from './AppRoutes';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const App = () => {
  return (
    <div>
      <React.Fragment>
      <Container maxWidth="lg">
      <Navbar />
      <AppRoutes />
      </Container>
      </React.Fragment>
    </div>
  );
};

export default App;
