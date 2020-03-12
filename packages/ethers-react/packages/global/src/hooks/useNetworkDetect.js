/**
 * @function useNetworkDetect
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useEffect } from 'react';

/* --- Local --- */
import { NETWORK_SET, ENS_ADDRESS_SET } from '../types';

/* --- Component --- */
export const useNetworkDetect = (state, dispatch) => {
  useEffect(() => {
    if (state.wallet) {
      const runEffect = async () => {
        try {
          // TODO(@kames) Be better.
          const name = {
            '1': 'mainnet',
            '3': 'ropsten',
            '4': 'rinkeby',
            '5': 'goerli',
            '42': 'kovan'
          }[state.wallet.provider._web3Provider.networkVersion];

          // Set network name and chainId.
          dispatch({
            payload: {
              name: name,
              chainId: state.wallet.provider._web3Provider.networkVersion
            },
            type: NETWORK_SET
          });

          // Set network ENS Address
          // dispatch({
          //   payload: state.wallet.network.ensAddress,
          //   type: ENS_ADDRESS_SET
          // });
        } catch (error) {
          console.log(error, 'error');
        }
      };
      runEffect();
    }
  }, [state.wallet]);

  return true;
};
