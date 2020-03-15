/* --- Global --- */
import {Router} from '@reach/router';

/* --- Local --- */
import {Site} from '@templates';
import {Home} from '@screens';

const DashboardPage = props => (
  <Site>
    <Router primary={false} style={{width: '100%', height: '100%'}}>
      <Home path="/" />
    </Router>
  </Site>
);

export default DashboardPage;
