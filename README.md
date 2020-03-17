# Ethers React App

A decentralized application starter kit for React developers.

<strong>WARNING</strong><br/>
The `ethers-react-app` projects and `@ethers-react` modules are under active development.

<strong>Expect API changes.</strong>

Several non-standard Webpack configurations are included in the dApp Demo Applications to simplify (in my opinion) the developer experience. For example, the React module is automatically injected when it's required, so developer's don't have to include `import React from 'react'` everytime a new component is created.

The [developer experience enhancements](#developer-experience-enhancements) section includes the non-standard configurations to simplify development.

<strong>Active Development</strong><br/>
The `ethers-react-app` project (v0.0.0) is the playground for <strong>hardening</strong> the `@ethers-react` module family.

Consider the project experimental and a minimal viable product for utilizing `hooks` to build Web3 frontend applications. The current approach was chosen, because from the perspective of Core Contributors (@kamescg) it's important to create an API that will be useful in real-world applications and also be easy for new developers to understand.

By creating the `ethers-react` library, in conjunction with non-trivial decentralized applications, a mature solution can arrived at more quickly.

Have a question? Open a ticket.

Want to recommend a change to the API? Open a ticket.

Interested in creating an extension to add functionality? You guessed it! Open a ticket.

# Overview

[Application Development](#application-development)
[Module Development](#module-development)
[Ethers React Libraries](#ethers-react-libraries)
[Getting Started](#getting-started)

### Application Development

The demo applications are under active development, but can generally be considered stable. You can preview the decentralized applications using the standard project commands `yarn start` and `yarn build`

### Module Development

The `@ethers-react` module are located in the `packages/ethers-react/packages` folder. Once the code is stable, the modules will be made available in the NPM registry. For now, module development will occur in the `ethers-react-app` project located in the [Horizin Github Organization](https://github.com/horizin/) repo, so modules can be be more easily tested with demo applications.

# Ethers React Libraries

The `ethers-react` project is a collection of JS modules. The modules are cateogrized as extension, interface or both. In other words a `@ethers-react/LIBRARY` module will export `extension` or `interface` functionality and sometimes both.

Extension modules export the `extension` object, which can be passed into the `<EthersProvider />` component.

Inteface modules export React `<Component/>`'s which generally reference a `EthersContext` instance.

**Extension Example**<br/>
`import { extension as Reactive } from "@ethers-react/reactive";`

**Interface Example**<br/>
`import { Address } from "@ethers-react/ui";`

**Extension & Interface Example**<br/>
`import { extension as Providers, ProviderSelect } from "@ethers-react/providers";`

## Core Module<br/>

The `@ethers-react/system` library is the foundation of `ethers-react` module family. The library provides several core features to improve the developer experience when building a decentralized application frontend.

#### Features

- Ethers Hooks
- Reactive Hooks
- Extension System
  - reducers
  - initialState
  - settings

### Ethers Hooks

Ethers Hooks are the primary method for interacting with the underyling `ethers` library. Decentralized applications often require interaction with one or more smart contracts running on an Ethereum blockchain. Hooks such as `useContractRead` and `useContractSendTransaction` simplify the steps required to interact with these smart contracts.

- useContractRead
  useContractSendTransaction
  useGetTransaction
  useGetTransactionReceipt
  useTransactionWatch
  useWalletEstimateTransaction
  useWalletSignTransaction
  useWalletSendTransaction
  useWalletSignMessage
  useWalletSignTypedMessage
  useWalletSignTypedMessageV3
  useWalletSignTypedMessageV4

Because interacting with smart contracts is the primary means for interacting with the blockchain, below is a simplified example of how to add Ethereum blockchain functionality to a basic React application. To see a real-world example run the `token-app` demo, which automatically loads an ERC20 smart contract and provides all of the essential functionality by importing the `ethers-react/token` module

#### useContractSendTransaction

The `useContractSendTransaction` is responsible for exposing functions to initialize the transaction, managing a connection to a smart contract (via the ) and processing the the requested transaction lifecyle.

<strong>Hook State</strong>
A `useContractSendTransaction` hook transaction has 4 lifecycle states: initialized, requested, broadcast and confirmed.

Everytime the hook undergoes a lifecyle state change the returned state is updated. The lifestyle state can be can used to trigger secondary effects, whether that's updating an interface component or triggering a secondary effects.

```js
const contractTransaction = hooks.useContractSendTransaction(contractName);

sendTransaction: ({ func, inputs, contractName, params }) => {…}
setContractName: contractName => {…}
lifecyle: undefined
hash: undefined
broadcast: undefined
broadcastError: undefined
broadcastErrorCode: undefined
receipt: undefined
receiptStatus: undefined
confirmedError: undefined
isBroadcast: false
isConfirmed: false
isRejected: false
isRequesting: false
isContractConnected: false
isContractFound: false
```

For example the `contractTransaction` variable can be passed into `useTransactionToast` provided by the `@ethers-react/ui-blueprint` module, which will in trigger a toast messages to appear within the application interface, during the transactions lifecycle changes. In short, the hooks avaiable `ethers-react` simplify the state changes of the blockchain interactions and side-effects of the application interface. In contrast the `web3-react` module only focuses on the state changes an application undergoes when interacting the Ethereum blockchain and the `rimble-ui` module only focuses on the interface components. Instead of focusing on just part of the developer experience the `ethers-react` module provides ready-to-go hooks to easily connect both application state and interface components, so developers can focus on building great looking decentralized applications, and less on the nuances of application state management.

```js
import { hooks } from "@ethers-react/system";
import { useTransactionToast } from "@ethers-react/ui-blueprint";

const contractTransaction = hooks.useContractSendTransaction(contractName);
const toast = useTransactionToast(contractTransaction);
```

<img alt="Ethers React Contract Transaction Request Toast Message Example" src="docs/images/ethers-request-request-dispatch-example.png" width="420">

#### Application.js

```js
import MeshDevCoin from "@contracts/MeshDevCoin.json";
import ERC20 from "@contracts/ERC20.json";
import TokenTransfer from "@forms/TokenTransfers";

export const contracts = [
  MeshDevCoin,
  {
    abi: ERC20.abi,
    bytecode: ERC20.bytecode,
    id: "TokenFactory"
  }
];

export default ({ children }) => {
  return (
    <EthersProvider contracts={contracts}>
      <TokenTransfer contractName="MeshDevCoin" />
    </EthersProvider>
  );
};
```

#### TokenTransfers.js

```js
import { useForm } from "react-hook-form";
import { hooks } from "@ethers-react/system";
export const TokenTransfer = (props) => {
  /* --- Hooks : State --- */
  const contractTransaction = hooks.useContractSendTransaction(contractName);

  /* --- Local : State --- */
  const { handleSubmit, register, errors } = useForm();

  /* --- Actions : Form  --- */
  // Submit : Action : Form
  const onSubmit = async values => {
    contractTransaction.sendTransaction({
      contractName: props.contractName, // "MeshDevCoin"
      func: "transfer",
      inputs: [values.address, values.amount],
      params: {}
    });
  };
...
```

If you've built a decentralized application before the first thing you might have noticed is a very small amount of code is required to interact with the Ethereum blockchain when using the `ethers-react` modules.

The developer experience is dramatically simplified.<br/>
Focus on the user experience. Less on managing the complexity of Web3.

Hooks provide a predictable pattern for managing a number of different interactions,

A majority of the logic normally required to interact with wallet provider (i.e MetaMask or Fortmatic) is abstracted behind several hooks

The library provides generic hooks for dispatching transactions, initializing contracts and manages extension initialization.

- `@ethers-react/system` (core)

Extension & Interface Libraries<br/>

- `@ethers-react/reactive` (extension)
- `@ethers-react/global` (extension)
- `@ethers-react/providers`(extension/interface)
- `@ethers-react/ui`(interface)
- `@ethers-react/ui-blueprint` (interface)
- `@ethers-react/tokens`(interface)
- `@ethers-react/tokens-blueprint`(interface)

## Getting Started

The `ethers-react-app` project is managed using Lerna. While, it's not required to be familiar `lerna` to setup the `ethers-react-app` demo applications, it might help. If you are having trouble running a demo application, please reference the Troubleshoot section for useful tips.

Several demo applications can be found in the `apps/` folder.

To run a demo dApp, first install the project depdencies, than start the project from a child folders.

```bash
$ git clone git@github.com:horizin/ethers-react-apps.git

$ cd ethers-react-apps

$ yarn

$ cd ./app/basic ; yarn start

$ cd ./app/dashboard ; yarn start

$ cd ./app/ens-certificate ; yarn start

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

# Developer Experience Enhancements

The demo applications are configured to simplify active. development by including folders alias and automatically injecting commonly used modules like `react` and the `theme-ui` design system
