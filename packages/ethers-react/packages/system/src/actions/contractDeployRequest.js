import { CONTRACT_DEPLOY_REQUEST } from "../lib/types";
export const contractDeployRequest = (state, dispatch) => ({
  contract,
  inputs
}) =>
  dispatch({
    type: CONTRACT_DEPLOY_REQUEST,
    payload: {
      contract,
      inputs
    }
  });
