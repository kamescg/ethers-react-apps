/* --- Global --- */
import {Router} from '@reach/router';

/* --- Local --- */
import {Dashboard} from '@templates';
import {
  Activity,
  Interface,
  Contracts,
  Tokens,
  TokensBlueprint,
  WalletSigning,
  WalletTransaction,
  WalletTransactionGlobal,
} from '@screens';

const DashboardPage = props => (
  <Dashboard>
    <Router width="100%" primary={false}>
      <Activity path="/" />
      <Interface path="/interface" />
      <Contracts path="/contracts" />
      <Tokens path="/contract/tokens" />
      <TokensBlueprint path="/contract/tokens-blueprint" />
      <WalletSigning path="/signing" />
      <WalletTransaction path="/transactions" />
      <WalletTransactionGlobal path="/transactions-global" />
    </Router>
  </Dashboard>
);

export default DashboardPage;
