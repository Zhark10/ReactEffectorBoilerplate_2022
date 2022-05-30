import TextField, { TextFieldProps } from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme } from '@mui/material/styles';
import { useViewModel } from './view-model';
import { Controller } from 'react-hook-form';
import { EButtonType, UIButton } from '../../../components/atoms/UIButton/UIButton';

const theme = createTheme();

export default function SignInPage() {
  const { methods, data: { control } } = useViewModel()

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography color="primary" component="h1" variant="h5">
          Вход
        </Typography>
        <Box component="form" onSubmit={methods.submit} noValidate sx={{ mt: 1 }}>

          <Controller
            name="login"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                {...commonInputProps(onChange, error)}
                label="Логин"
                value={value}
                type="text"
              />
            )}
            rules={{ required: 'Необходимо заполнить логин' }}
          />

          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                {...commonInputProps(onChange, error)}
                label="Пароль"
                value={value}
                type="password"
              />
            )}
            rules={{ required: 'Необходимо заполнить пароль' }}
          />

          <UIButton fullWidth onClick={methods.submit} text="Войти" type={EButtonType.CONTAINED} />
        </Box>
      </Box>
    </Container>
  );
}

function commonInputProps(onChange: (...event: any[]) => void, error: any): TextFieldProps {
  return {
    fullWidth: true,
    onChange,
    error: Boolean(error),
    autoFocus: true,
    helperText: error ? error.message : null,
    style: { marginBottom: 12 }
  } as TextFieldProps
}