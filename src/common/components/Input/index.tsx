import { memo } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface InputPropsType {
  label: string;
  fullWidth: boolean;
  type: string;
  // eslint-disable-next-line no-unused-vars
  handleChange: (e: any) => void;
}

function Input({
  label, fullWidth, handleChange, type,
}: InputPropsType) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-basic"
        label={label}
        type={type}
        variant="standard"
        fullWidth={fullWidth}
        onChange={handleChange}
      />
    </Box>
  );
}

export default memo(Input);
