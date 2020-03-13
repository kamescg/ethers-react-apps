import {extension as Reactive} from '@ethers-react/reactive';
import {extension as Providers} from '@ethers-react/providers';

import ERC20 from '@contracts/ERC20.json';
import MeshDevCoin from '@contracts/MeshDevCoin.json';

export const contracts = [
  MeshDevCoin,
  {
    abi: ERC20.abi,
    bytecode: ERC20.bytecode,
    id: 'TokenFactory',
  },
];

Reactive.initialState.reactive.getAccountBalance = true;
Reactive.initialState.reactive.getAccountNonce = true;
Reactive.initialState.reactive.getAccountOnLoad = true;
Reactive.initialState.reactive.getProviderSigner = true;
Reactive.initialState.reactive.watchAccountOnChange = true;
Reactive.initialState.reactive.watchBlockCurrent = true;

export const extensions = [Reactive, Providers];
