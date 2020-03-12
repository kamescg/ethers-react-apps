/**
 * @function Provider
 * @param {Array<React.Component>} children
 * @param {Array} contracts
 * @param {String} provider
 */

/* --- Global --- */

import React, { useContext, useReducer, useEffect } from "react";

/* --- Local --- */
import Context from "../Context";
import reducers from "../reducer";
import * as actionList from "../actions";
import { useWalletEnable } from "../reactive";
import {
  enhanceActions,
  enhanceExtensionActions,
  contractLoad,
  extensionsInitialize
} from "../middleware";

/* --- Component --- */
const Provider = ({ children, contracts = [], extensions }) => {
  /* --- Ethers Context --- */
  const initialState = useContext(Context);

  /* --- Reducer --- */
  const [state, dispatch] = useReducer(
    reducers,
    initialState,
    contractLoad(contracts)
  );

  /* --- Extensions : Initialize --- */
  extensionsInitialize(extensions, state, dispatch);

  /* --- Enhance Actions --- */
  const actions = enhanceExtensionActions(extensions, dispatch);
  const actionsEnhanced = enhanceActions(actionList, state, dispatch);

  /* --- Developer Messages --- */
  useWalletEnable(state, dispatch);
  return (
    <Context.Provider
      value={{
        ...state,
        ...actions,
        ...actionsEnhanced
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
