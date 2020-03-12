import { hashCode } from '../utilities';
import { CONTRACT_DEPLOY_FROM_BYTECODE_REQUEST } from '../types';
export const contractDeployFromBytecodeRequest = (state, dispatch) => (
  abi,
  bytecode,
  delta
) =>
  dispatch({
    type: CONTRACT_DEPLOY_FROM_BYTECODE_REQUEST,
    input: bytecode,
    delta: delta || hashCode(abi)
  });
