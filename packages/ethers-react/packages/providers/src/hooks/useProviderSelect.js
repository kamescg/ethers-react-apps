/**
 * @function useAccountBalance
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useEffect } from "react";
import Web3Modal from "web3modal";
import Fortmatic from "fortmatic";
import { ethers } from "@ethers-react/system";

/* --- Local --- */
import {
  SET_PROVIDER,
  PROVIDER_SELECT_SUCCESS,
  PROVIDER_SELECT_FAILURE
} from "../lib/types";

/* --- Settings --- */
const providerOptions = {
  fortmatic: {
    package: Fortmatic, // required
    options: {
      key: "pk_test_811EF9842FE79F43" // required
    }
  }
};

const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  cacheProvider: false, // optional
  providerOptions // required
});

/* --- Effect --- */
export const useProviderSelect = (state, dispatch) => {
  useEffect(() => {
    if (state.isSelectedProviderRequested) {
      (async () => {
        try {
          const providerSelect = await web3Modal.connect();
          const provider = await new ethers.providers.Web3Provider(
            providerSelect
          );
          dispatch({
            payload: provider,
            type: SET_PROVIDER
          });
          dispatch({
            type: PROVIDER_SELECT_SUCCESS
          });
        } catch (error) {
          console.log(error);
          dispatch({
            type: PROVIDER_SELECT_FAILURE
          });
        }
      })();
    }
  }, [state.isSelectedProviderRequested]);

  return true;
};
