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
Reactive.initialState.reactive.getAccountBalance = true;
Reactive.initialState.reactive.getAccountNonce = true;
Reactive.initialState.reactive.getAccountOnLoad = true;
Reactive.initialState.reactive.getProviderSigner = true;
Reactive.initialState.reactive.getWalletProviderInitialize = false;
Reactive.initialState.reactive.watchAccountOnChange = true;
Reactive.initialState.reactive.watchBlockCurrent = true;
Reactive.initialState.reactive.getWalletAddress = true;
Reactive.initialState.reactive.getWalletNetwork = true;
Reactive.initialState.reactive.getWalletNonce = true;

export const extensions = [Reactive, Providers];
// export const extensions = [Providers];
