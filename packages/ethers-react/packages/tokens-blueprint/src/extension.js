import * as actions from "./actions";
import * as hooks from "./hooks";
import reducer from "./lib/reducer";

export const extension = {
  name: "tokens",
  actions,
  hooks,
  reducer,
  initialState: {}
};
