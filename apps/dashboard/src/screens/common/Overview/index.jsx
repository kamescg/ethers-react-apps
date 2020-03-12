/* --- Global --- */

/* --- Local --- */
import {Introduction} from '@views';
/* --- Overview : Screen --- */
const Overview = props => {
  return (
    <Atom.Box>
      <Main />
    </Atom.Box>
  );
};

const Main = props => {
  return (
    <Atom.Box sx={{m: 2}}>
      <Introduction />
    </Atom.Box>
  );
};

export default Overview;
