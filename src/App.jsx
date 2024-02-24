import { Box, Button, Dialog, DialogContent, Grid, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import LoginDialog from './LoginDialog';

const App = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'blue',
          '& > :not(style)': {
            m: 1,
            width: 500,
            height: 300,
          },
        }}
      >
        <Paper style={{ backgroundColor: '#e0e0e0' }} elevation={3} >
          <Grid style={{
            display: 'flex', justifyContent: 'center',
            alignItems: 'center', flexDirection: 'column', gap: 4
          }}>
            <Typography variant="h6" gutterBottom>
              Login
            </Typography>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" onClick={handleClickOpen}>Login Here</Button>
          </Grid>
        </Paper>
      </Box>

      <LoginDialog
        open={open}
        handleClose={handleClose}
        email={email}
        password={password}
      />

    </>
  )
}

export default App