import { useCallback } from 'react';
import Box from '@mui/material/Box';
import { ErrorBoundary } from 'react-error-boundary';
import Input from '../../common/components/Input';
import Button from '../../common/components/Button';
import ErrorFallback from '../../common/components/ErrorFallback';

function Login() {
  const onChange = useCallback(
    (e: any) => {
      e.preventDefault();
    },
    [], // add dependency here
  );

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
      // reset the state of your app so the error doesn't happen again
      }}
    >
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
    </ErrorBoundary>
  );
}

export default Login;
