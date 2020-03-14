// Web3Modal & Plugins
import Web3Modal from 'web3modal';
import Fortmatic from 'fortmatic';
import BurnerConnectProvider from '@burner-wallet/burner-connect-provider';
import WalletConnectProvider from '@walletconnect/web3-provider';

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

export const web3Modal = new Web3Modal({
  network: 'mainnet', // optional
  cacheProvider: true, // optional
  providerOptions, // required
});
