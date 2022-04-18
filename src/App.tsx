import React from 'react';
import logo from './logo.svg';
import './App.css';

import MainHeader from './components/MainHeader/MainHeader';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

function App() {
  return (
    <div className="App">
      <MainHeader></MainHeader>
      <Card>
        <CardMedia
          component="img"
          image="https://48tools.com/wp-content/uploads/2015/09/shortlink.png"
          alt="quiz image"
          height="130"
        />
        <CardContent>
          <Typography variant="h5">Sample quiz</Typography>
        </CardContent>
        <CardActions>
          <Button>Start</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default App;
