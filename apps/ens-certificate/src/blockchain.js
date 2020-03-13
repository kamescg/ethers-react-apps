import {extension as Reactive} from '@ethers-react/reactive';
import {extension as Providers} from '@ethers-react/providers';

import RapidSubdomainRegistrar from '@contracts/RapidSubdomainRegistrarMeta.json';

export const contracts = [RapidSubdomainRegistrar];

Reactive.initialState.reactive.getAccountBalance = true;
Reactive.initialState.reactive.getAccountNonce = true;
Reactive.initialState.reactive.getAccountOnLoad = true;
Reactive.initialState.reactive.getProviderSigner = true;
Reactive.initialState.reactive.getWalletProviderInitialize = false;
Reactive.initialState.reactive.watchAccountOnChange = true;
Reactive.initialState.reactive.watchBlockCurrent = true;

export const extensions = [Reactive, Providers];
