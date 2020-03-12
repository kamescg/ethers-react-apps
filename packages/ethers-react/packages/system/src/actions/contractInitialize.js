/**
 * @summary This function will take the built smart contracts(and a optional deployed address param)
 * and initialize the smart contract with the deployed version.
 * By default it will pull the latest deployed address from the JSON file.
 *
 * @param {Object} Contract The smart contract build object. Assumed to follow the general structure resulting
 * from compiling via the truffle(ie it has the abi, networks used, etc)
 *
 * @param {String} address optional parameter that specifies the deployment address to initialize the contract with.
 * In the event you need to initialize with a contract that is not the latest deployed.
 *
 * TODO @todo add extensive error checking
 */
export const contractInitialize = (state, dispatch) => (props, address) => {
  const { wallet } = state;
  if (wallet === undefined || props.abi === undefined) {
    return;
  }

  try {
    // const latestAddress = getLatestDeploymentAddress(Contract);
    const contract = new ethers.Contract(props.address, props.abi, wallet);
    dispatch({
      type: INIT_CONTRACT_REQUEST,
      id: props.contractName,
      payload: {
        contract,
        address: props.address
      }
    });
  } catch (error) {
    console.log(error);
    return;
  }
};
