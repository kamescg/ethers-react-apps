import * as hooks from "./hooks";
import * as actions from "./actions";
import * as selectors from "./selectors";
import * as types from "./types";
import reducer from "./reducer";
export const extension = {
  name: "ethers-react-global",
  actions,
  hooks,
  selectors,
  types,
  reducer,
  initialState: {
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
    store: {
      contracts: []
    }
  }
};
