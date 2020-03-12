/* --- Global --- */
import {ThemeProvider} from 'theme-ui';
import {EthersProvider} from '@ethers-react/system';
import {hooks as hooksReactive} from '@ethers-react/reactive';
import {
  actions as actionsGlobal,
  hooks as hooksGlobal,
  types as typesGlobal,
} from '@ethers-react/global';

/* --- Local --- */
import ERC20 from '@contracts/ERC20.json';
import MeshDevCoin from '@contracts/MeshDevCoin.json';

import theme from './assets/theme';

/* --- Configuration --- */
const contracts = [
  MeshDevCoin,
  {
    abi: ERC20.abi,
    bytecode: ERC20.bytecode,
    id: 'TokenFactory',
  },
];
const extensions = [
  {
    name: 'ethers-react-reactive',
    hooks: hooksReactive,
  },
  // {
  //   name: 'ethers-react-global',
  //   actions: actionsGlobal,
  //   hooks: hooksGlobal,
  //   types: typesGlobal,
  // },
];

/* --- Component --- */
export default props => {
  return (
    <ThemeProvider theme={theme}>
      <EthersProvider contracts={contracts} extensions={extensions}>
        {props.children}
      </EthersProvider>
    </ThemeProvider>
  );
};
