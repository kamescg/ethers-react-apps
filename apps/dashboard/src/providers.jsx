/* --- Global --- */
import {ThemeProvider} from 'theme-ui';
import {EthersProvider} from '@ethers-react/system';

import theme from './assets/theme';

/* --- Configuration --- */
import {contracts, extensions} from './blockchain';

/* --- Component --- */
export default props => {
  return (
    <ThemeProvider theme={theme}>
      <EthersProvider contracts={contracts} extensions={extensions}>
        {props.children}
      </EthersProvider>
    </ThemeProvider>
  );
};
