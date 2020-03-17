/* --- Global --- */
import {extension as Reactive} from '@ethers-react/reactive';
import {extension as Providers} from '@ethers-react/providers';

// Web3Modal & Plugins
import Web3Modal from 'web3modal';
import Fortmatic from 'fortmatic';
import BurnerConnectProvider from '@burner-wallet/burner-connect-provider';
import WalletConnectProvider from '@walletconnect/web3-provider';

/* --- Local --- */
import RapidSubdomainRegistrar from '@contracts/RapidSubdomainRegistrarMeta.json';

/* --- Contracts --- */
export const contracts = [RapidSubdomainRegistrar];

/* --- Providers --- */
const providerOptions = {
  fortmatic: {
    package: Fortmatic, // required
    options: {
      key: 'pk_test_811EF9842FE79F43', // required
    },
  },
  burnerconnect: {
    package: BurnerConnectProvider, // required
    options: {},
  },
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: '4cbb1b6204174468b34379b4acdbd1cd', // required
    },
  },
};

const web3Modal = new Web3Modal({
  network: 'rinkeby', // optional
  cacheProvider: false, // optional
  providerOptions, // required
});

Providers.initialState = {
  web3Modal: web3Modal,
};

/* --- Reactive --- */
Reactive.settings.getAccountBalance = true;
Reactive.settings.getAccountNonce = true;
Reactive.settings.getAccountOnLoad = true;
Reactive.settings.getProviderSigner = true;
Reactive.settings.getWalletProviderInitialize = false;
Reactive.settings.watchAccountOnChange = true;
Reactive.settings.watchBlockCurrent = true;
Reactive.settings.getWalletAddress = true;
Reactive.settings.getWalletNetwork = true;
Reactive.settings.getWalletNonce = true;
Reactive.settings.watchNetworkOnChange = true;

export const extensions = [Reactive, Providers];
// export const extensions = [Providers];
