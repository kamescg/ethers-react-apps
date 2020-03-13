/**
 * @function contractLoad
 */

/* --- Global --- */
import { selectNetworkName } from "../lib/helpers";

/* --- Configuration --- */
const DEPLOYED = "deployed";
const FACTORY = "factory";

/* --- Function --- */
export const contractLoad = contracts => initialState => {
  let contractLibrary = {};

  contracts.forEach(contract => {
    /* --- Standard JSON : Smart Contract JSON --- */
    if (contract.networks) {
      const networkId = Object.keys(contract.networks)[0];
      const address = contract.networks[networkId].address;
      const transactionHash = contract.networks[networkId].transactionHash;

      contractLibrary[address] = {
        address: address,
        abi: contract.abi,
        bytecode: contract.bytecode,
        transactionHash: transactionHash,
        name: contract.name,
        type: DEPLOYED,
        network: {
          chainId: Number(networkId),
          name: selectNetworkName(networkId)
        }
      };
    }

    /* --- Custom Input : Smart Contract --- */
    if (contract.network) {
      contractLibrary[contract.address] = {
        address: contract.address,
        abi: contract.abi,
        bytecode: contract.bytecode,
        contractName: contract.name,
        transactionHash: contract.transactionHash,
        name: contract.name,
        type: DEPLOYED,
        network: contract.network
      };
    }

    /* --- Factory : Smart Contract --- */
    if (!contract.network && !contract.address && contract.id) {
      contractLibrary[contract.id] = {
        abi: contract.abi,
        bytecode: contract.bytecode,
        type: FACTORY
      };
    }
  });

  return {
    ...initialState,
    contracts: {
      ...contractLibrary
    }
  };
};
