import { Key } from 'react';
import { SnackbarProvider } from 'notistack';

import { ModalsPortal } from './view/components/organisms/ModalsPortal';
import { ThemeProvider } from "@mui/material";
import { themeBuilder } from './configs/theme/config/themeBuilder';
import { UINotice } from './view/components/atoms/UINotice/UINotice';
import { MainRouter } from './view/navigation/Router';

function App() {
  return (
    <ThemeProvider theme={themeBuilder(0)}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        content={(key: Key, notice: any) => <UINotice id={key} notice={notice} />}
      >
        <MainRouter />
        <ModalsPortal />
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
