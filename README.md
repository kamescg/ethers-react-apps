# Ethers React App

A decentralized application starter kit for React developers.

<strong>WARNING</strong><br/>
The `ethers-react-app` projects and `@ethers-react` modules are under active development. <strong>Expect API changes.</strong>

Several non-standard Webpack configurations are included in the dApp Demo Applications to simplify (in my opinion) the developer experience. For example, the React module is automatically injected when it's required, so developer's don't have to include `import React from 'react'` everytime a new component is created.

The [developer experience enhancements](#developer-experience-enhancements) section includes the non-standard configurations to simplify development.

<strong>Active Development</strong><br/>
The `ethers-react-app` project (v0.0.0) is the playground for <strong>hardening</strong> the `@ethers-react` module family. Consider the project experimental and a minimal viable product for utilizing `hooks` to build Web3 frontend applications. The current approach was chosen, because from the perspective of Core Contributors (@kamescg) it's important to create an API that will be useful in real-world applications and also be easy for new developers to understand.

By creating the `ethers-react` library, in conjunction with non-trivial decentralized applications, a mature solution can arrived at more quickly.

Have a question? Open a ticket.

Want to recommend a change to the API? Open a ticket.

Interested in creating an extension to add functionality? You guessed it! Open a ticket.

### Demo Applications

The demo applications are under active development, but can generally be considered stable. You can preview the decentralized applications using the standard project commands `yarn start` and `yarn build`

### Modules

The `@ethers-react` module are located in the `packages/ethers-react/packages` folder. Once the code is stable, the modules will be made available in the NPM registry. For now, module development will occur in the `ethers-react-app` project located in the [Horizin Github Organization](https://github.com/horizin/) repo, so modules can be be more easily tested with demo applications.

### Libraries

The `ethers-react` project is a collection of JS modules. The modules are cateogrized as extension, interface or both. In other words `@ethers-react` modules export `extension` or `interface` functionality and sometimes both.

Extension modules export the `extension` object, which can be passed into the `<EthersProvider />` component.

Inteface modules export React `<Component/>`'s which generally reference a `EthersContext` instance.

**Extension Example**<br/>
`import { extension as Reactive } from "@ethers-react/reactive";`

**Interface Example**<br/>
`import { Address } from "@ethers-react/ui";`

**Extension & Interface Example**<br/>
`import { extension as Providers, ProviderSelect } from "@ethers-react/providers";`

The `@ethers-react/system` library is the foundation of `ethers-react` module family. The library provides generic hooks for dispatching transactions, initializing contracts and manages extension initialization.

Core<br/>

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
