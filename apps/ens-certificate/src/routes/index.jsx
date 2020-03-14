/* --- Global --- */
import {Router} from '@reach/router';

/* --- Local --- */
import {Dashboard} from '@templates';
import {Admin, GenerateCertificates, SubDomainRegistration} from '@screens';

const DashboardPage = props => (
  <Dashboard>
    <Router
      width="100%"
      height="100%"
      style={{height: '100%', width: '100%'}}
      primary={false}>
      <SubDomainRegistration path="/" />
      <GenerateCertificates path="/admin" />
    </Router>
  </Dashboard>
);

export default DashboardPage;
