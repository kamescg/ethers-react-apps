# System (@ethers-react/system)

The `@ethers-react/system` library is the core of the `ethers-react` module.

The library is responsible for the application’s primary blockchain state management, exposing React hooks (side-effect management) for easily interacting with the Ethereum blockchain and managing additional functionality to be added using a minimal extension management system.

First, instead of relying on popular application state management systems like Redux, the library manages the application's state via the `useContext` functionality now provided by the core `react` module.

Second, in addition to using React's native lightweight state management, the new hook paradigm (useState, useEffect and useReducer) is used to manage the lifecycle of common interactions with the Ethereum blockchain (transactions, smart contracts, events, etc...).

Finally, the `@ethers-react/system` enables developers to easily extend core library functionality using an extension, so it's possible to extend the `@ethers-react/system` library with additional features provided by other Web3 libraries like [Web3Modal](https://github.com/Web3Modal/web3modal) and [3Box](https://github.com/3box/3box-js).
