/**
 * @function Application
 * @version 0.0.1
 */

/* --- Global --- */
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

/* --- Local --- */
import './assets/css/reset.css';
import './assets/css/App.css';
import Routes from '@routes';
import Providers from './providers';

/* --- Component --- */
export default () => (
  <Providers>
    <Routes />
  </Providers>
);
