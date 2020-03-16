# Ethers React App

A decentralized application starter kit for React developers.

WARNING: The `ethers-react-app` and `@ethers-react` modules are under development. <strong>Expect API changes.</strong>

The `ethers-react-app` repo (v0.0.0) is the playground for <strong>hardening</strong> the `ethers-react` module family. The current approach is experimental and should be considered a minimal viable product for utilizing `hooks` to build Web3 frontend applications.

Have a question? Open a ticket.

Want to recommend a change to the API? Open a ticket.

## Demo Applications

The demo applications are under active development, but are in a stable state. You can preview the decentralized applications using the standard project commands `yarn start` and `yarn build`

### Modules (`packages/ethers-react/packages`)

The important work is happening in the `packages/ethers-react/packages` folder.

## Overview

The `@ethers-react/system` library is the foundation of `ethers-react` module family. The library provides generic hooks for dispatching transactions, initializing contracts and manages extension initialization.

### Modules

The following libraries are in active development and relatively stable.

- `@ethers-react/system` (stable)
- `@ethers-react/reactive` (stable)
- `@ethers-react/global` (unstable)
- `@ethers-react/providers`(stable)
- `@ethers-react/ui`(stable)
- `@ethers-react/ui-blueprint` (unstable)
- `@ethers-react/tokens`(stable)
- `@ethers-react/tokens-blueprint`(stable)

## Getting Started

The `ethers-react-app` project is managed using Lerna. While, it's not required to be familiar `lerna` to contribute to use the `ethers-react-app` demo applications, it might help if you get stuck anywhere.

```bash
$ git clone git@github.com:horizin/ethers-react-apps.git

$ cd ethers-react-apps

$ yarn

// Basic
$ cd ./app/basic ; yarn start

// Dashboard
$ cd ./app/dashboard ; yarn start

// ENS Domain
$ cd ./app/dashboard ; yarn start

```

## System (`@ethers-react/system`)

The `@ethers-react/system` library exposes functionality via `hooks`, `withEthers`, `EthersProvider`, `EthersInject` and `selectors`.

```jsx
import { EthersProvider } from "@ethers-react/system";

export default ({ children }) => {
  return <EthersProvider contracts={contracts}>{children}</EthersProvider>;
};
```

#### Contract Loading

Decentralized applications communicate with smart contracts on the Ethereum blockchain.

Smart Contract artifacts (JSON outputs from build process) can be passed directly in the `<EthersProvider/>` component. By passing smart contracts (artifacts) `EthersProvider` component developers don't have to manage contract initialization. Everything is handled when a blockchain `provider` and wallet `signer` are initialized.

The `@ethers-react/system` library manages contract initialization, so you don't have too.

```jsx
/* --- Modules --- */
import { EthersProvider } from "@ethers-react/system";
import MeshDevCoin from "@contracts/MeshDevCoin.json";
import ERC20 from "@contracts/ERC20.json";

/* --- Contracts --- */
export const contracts = [
  MeshDevCoin,
  {
    abi: ERC20.abi,
    bytecode: ERC20.bytecode,
    id: "TokenFactory"
  }
];

export default ({ children }) => {
  return <EthersProvider contracts={contracts}>{children}</EthersProvider>;
};
```

### Extensions

The `@ethers-react/system` can be passed `ethers-react` extensions. Extensions add funtionality, which are not available in the system library. Currently (v0.0.0) only a handful of extensions are available: reactive and providers.

In the future, additional extensions might be made available to functionality like transaction/event caching and a global state management system.

Core Extensions

- `@ethers-react/reactive`
- `@ethers-react/provider`

Future Extensions

- `@ethers-react/globalize`
- `@ethers-react/caching`

#### Reactive

The `@ethers-react/reactive` library automatically handles a number of important application state updates, such as exposing a wallet address, signer, nonce, balance and others.

- useAccountOnChange
- useBlockMined
- useNetworkOnChange
- useWalletAddress
- useWalletNetwork
- useWalletBalance
- useWalletNonce
- useWalletProviderInitialize
- useWalletSignerGet

Including the `reactive` extension module is highly recommended, unless an alternative extension is provided to handle <strong>critical</strong> application functionality like initializing the provider signer (i.e. wallet) during application runtime.

Reactive features can be toggled on/off by editing the `settings` of the imported `extension` object exported from the `@ethers-react/reactive` module.

```js
/* --- Modules --- */
import { EthersProvider } from "@ethers-react/system";
import { extension as Reactive } from "@ethers-react/reactive";

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

export default ({ children }) => {
  return <EthersProvider extensions={[Reactive]}>{children}</EthersProvider>;
};
```

#### Providers

The `@ethers-react/provider` library adds the `Web3Modal` to simplify provider selection options.

```js
/* --- Modules --- */
import { EthersProvider } from "@ethers-react/system";
import { extension as Providers } from "@ethers-react/providers";

// Web3Modal & Plugins
import Web3Modal from "web3modal";
import Fortmatic from "fortmatic";
import BurnerConnectProvider from "@burner-wallet/burner-connect-provider";
import WalletConnectProvider from "@walletconnect/web3-provider";

/* --- Providers --- */
const providerOptions = {
  fortmatic: {
    package: Fortmatic, // required
    options: {
      key: "INSERT_KEY"
    }
  },
  burnerconnect: {
    package: BurnerConnectProvider,
    options: {}
  },
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: "INSERT_ID" // required
    }
  }
};

const web3Modal = new Web3Modal({
  network: "mainnet",
  cacheProvider: false,
  providerOptions
});

Providers.initialState = {
  web3Modal: web3Modal
};

export default ({ children }) => {
  return <EthersProvider extensions={[Providers]}>{children}</EthersProvider>;
};
```

### Hooks

### Reactive
