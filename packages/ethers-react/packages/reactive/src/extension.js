import * as hooks from "./hooks";
import reducer from "./reducer";
export const extension = {
  name: "ethers-react-reactive",
  hooks,
  reducer,
  initialState: {
    blockCurrent: 0,
    reactive: {
      getAccountBalance: false,
      getAccountOnLoad: false,
      getAccountNonce: false,
      getProviderSigner: false,
      watchAccountBalance: false,
      watchAccountOnChange: false,
      watchAccountNonce: false,
      watchBlockCurrent: false,
      watchNetworkOnChange: false
    }
  }
};
