import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

interface InputPropsType {
  label: string;
  color: 'inherit' | 'error' | 'primary' | 'secondary' | 'info' | 'success' | 'warning';
}

function CommonButton({ label, color }: InputPropsType) {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color={color}>
        {label}
      </Button>
    </Stack>
  );
}

export default CommonButton;
