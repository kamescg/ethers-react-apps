/**
 * @function Provider
 * @param {Array<React.Component>} children
 * @param {Array} contracts
 * @param {String} provider
 */

/* --- Global --- */

import React, { useContext, useReducer, useEffect, useState } from "react";

/* --- Local --- */
import Context from "./Context";
import reducers from "./lib/reducer";
import * as actionList from "./actions";
import { useWalletEnable } from "./reactive";
import {
  enhanceActions,
  enhanceExtensionActions,
  contractLoad,
  extensionsInitialize,
  combineExtensionInitialState,
  combineExtensionsReducers
} from "./middleware";

/* --- Component --- */
const Provider = ({ children, contracts = [], extensions }) => {
  const [actions, setActions] = useState();
  const [extensionActions, setExtensionActions] = useState();
  /* --- Ethers Context --- */
  const initialState = useContext(Context);

  /* --- Reducer --- */
  const [state, dispatch] = useReducer(
    combineExtensionsReducers([{ name: "core", reducers }, ...extensions]),
    combineExtensionInitialState([
      { name: "core", initialState },
      ...extensions
    ]),
    contractLoad(contracts)
  );

  /* --- Extensions : Initialize --- */
  extensionsInitialize(extensions, state, dispatch);

  /* --- Enhance Actions --- */

  useEffect(() => {
    const actions = enhanceActions(actionList, state, dispatch);
    const actionsExtensions = enhanceExtensionActions(extensions, dispatch);
    console.log(actionsExtensions, "actionsEnhanced");
    setActions(actions);
    setExtensionActions(actionsExtensions);
  }, []);

  /* --- Reactive : Effects --- */
  useWalletEnable(state, dispatch);

  console.log(extensionActions, "actions extensions");

  /* --- Developer Messages --- */
  console.log(state, "Ethers Provider");

  return (
    <Context.Provider
      value={{
        ...state,
        ...actions,
        ...extensionActions
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
