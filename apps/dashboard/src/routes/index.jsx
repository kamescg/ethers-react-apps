/* --- Global --- */
import {Router} from '@reach/router';

/* --- Local --- */
import {Dashboard} from '@templates';
import {
  Activity,
  Interface,
  Contracts,
  WalletSigning,
  WalletTransaction,
} from '@screens';

const DashboardPage = props => (
  <Dashboard>
    <Router width="100%" primary={false}>
      <Activity path="/" />
      <Interface path="/interface" />
      <Contracts path="/contracts" />
      <WalletSigning path="/signing" />
      <WalletTransaction path="/transactions" />
    </Router>
  </Dashboard>
);

export default DashboardPage;
