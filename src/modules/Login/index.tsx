import React, { useCallback } from 'react';
import Box from '@mui/material/Box';
import Input from '../../common/components/Input';
import Button from '../../common/components/Button';

function Login() {
  const onChange = useCallback(
    (e: any) => {
      e.preventDefault();
    },
    [], // add dependency here
  );

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <h1>Login</h1>
      <Input type="email" label="Email" fullWidth handleChange={onChange} />
      <Input type="password" label="Password" fullWidth handleChange={onChange} />
      <Button color="primary" label="Submit" />
    </Box>
  );
}

export default Login;
