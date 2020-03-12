/**
 * @name EthersContext
 * @description Initialize Ethers context.
 */

import { createContext } from "react";
import { ethers } from "ethers";

/**
 * @typedef Context @memberof React.Context
 * @property {Object} instance
 * @property {Object} store
 * @property {Object} contracts
 * @property {Object} library
 * @property {Array} deployed
 * @property {Object} signatures
 * @property {String} address
 * @property {String} addressShortened
 * @property {String} addressTrimmed
 * @property {String} wallet
 * @property {Function} enable
 * @property {Function} loadContractIntoLibrary
 * @property {Function} initContract
 * @property {Function} initContractFromLibrary
 * @property {Function} deployContract
 * @property {Function} deployContractFromBytecode
 * @property {Function} setProvider
 * @property {Function} setProviderStatus
 * @property {Function} signMessage
 * @property {Function} signMessageTyped
 */

const Context = createContext({
  instance: ethers,
  address: undefined,
  balance: undefined,
  network: undefined,
  nonce: undefined,
  provider: undefined,
  providers: undefined,
  wallet: undefined,
  contracts: {},
  activity: {
    deploy: {},
    messages: {},
    signatures: {},
    transactions: {}
  },
  requests: {
    deploy: [],
    messages: [],
    signatures: [],
    transactions: []
  },
  // library: {
  //   contracts: []
  // },
  store: {
    contracts: []
  }
  // enableRequest: () => {}
  // contractDeployRequest: () => {},
  // contractDeployFromBytecodeRequest: () => {},
  // contractInitializeRequest: () => {},
  // walletSendTransactionRequest: () => {},
  // walletSignMessageRequest: () => {},
  // walletSignMessageTypedRequest: () => {},
  // walletSignTransactionRequest: () => {}
});

export default Context;
