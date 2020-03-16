/**
 * @function Application
 * @version 0.0.1
 */

/* --- Global --- */
import Routes from '@routes';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

/* --- Local --- */
import './assets/css/reset.css';
import './assets/css/App.css';
import './assets/css/blueprint.css';

import Providers from './providers';

/* --- Component --- */
export default () => (
  <Providers>
    <Routes />
  </Providers>
);
