/* --- Global --- */
import {ContractList} from '@ethers-react/ui';

/* --- Local --- */

/* --- Contracts : Screen --- */
const Contracts = props => {
  return (
    <Atom.Box>
      <Main />
    </Atom.Box>
  );
};

const Main = props => {
  return (
    <Atom.Box sx={{p: 3, px: 4}}>
      <ContractList />
    </Atom.Box>
  );
};

export default Contracts;
