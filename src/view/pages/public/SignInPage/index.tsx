import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useViewModel} from './view-model';
import {Controller} from 'react-hook-form';

const theme = createTheme();

export default function SignInPage() {
  const { methods, data: { control } } = useViewModel()

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Авторизация
          </Typography>
          <Box component="form" onSubmit={methods.submit} noValidate sx={{ mt: 1 }}>

            <Controller
              name="login"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                  margin="normal"
                  fullWidth
                  label="Логин"
                  variant="filled"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  autoFocus
                  helperText={error ? error.message : null}
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
                  margin="normal"
                  fullWidth
                  label="Пароль"
                  variant="filled"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                  type="password"
                />
              )}
              rules={{ required: 'Необходимо заполнить пароль' }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Войти
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
