import React from 'react';
import Box from '@mui/material/Box';
import Input from '../../common/components/Input';
import Button from '../../common/components/Button';

function Login() {
  const onChange = (e: any) => {
    e.preventDefault();
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      Login
      <Input type="email" label="Email" fullWidth handleChange={onChange} />
      <Input type="password" label="Password" fullWidth handleChange={onChange} />
      <Button color="primary" label="Submit" />
    </Box>
  );
}

export default Login;
