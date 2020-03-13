/* --- Global --- */
import {Router} from '@reach/router';

/* --- Local --- */
import {Dashboard} from '@templates';
import {Admin, Contracts, SubDomainRegistration} from '@screens';

const DashboardPage = props => (
  <Dashboard>
    <Router
      width="100%"
      height="100%"
      style={{height: '100%', width: '100%'}}
      primary={false}>
      <SubDomainRegistration path="/" />
      <Admin path="/admin" />
      <Contracts path="/contracts" />
    </Router>
  </Dashboard>
);

export default DashboardPage;
