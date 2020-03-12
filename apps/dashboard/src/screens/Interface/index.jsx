/* --- Global --- */
import {
  Address,
  Enable,
  NetworkName,
  BlockCurrent,
  NetworkID,
} from '@ethers-react/ui';

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
    <Atom.Box sx={{}}>
      <AddressDemo />
    </Atom.Box>
  );
};

const AddressDemo = props => {
  return (
    <Atom.Flex>
      <Atom.Box sx={{flex: 1, p: 4}}>
        <Atom.Heading sx={{fontSize: [3, 3, 4]}}>Address</Atom.Heading>
        <Atom.Paragraph sm>
          Nam mattis commodo nunc vel hendrerit. Sed rhoncus lobortis semper.
          Donec in tellus eu enim semper ornare eget et felis. Etiam eu justo
          tincidunt, sollicitudin libero a, pellentesque odio.
        </Atom.Paragraph>
      </Atom.Box>
      <Atom.Flex center column sx={{bg: 'smoke', flex: 1, p: 4}}>
        <Atom.Span>
          <strong>Address:</strong> <Address />
        </Atom.Span>
        <Atom.Span sx={{mt: 3}}>
          <strong>Address:</strong> <Address trim={7} />
        </Atom.Span>
      </Atom.Flex>
    </Atom.Flex>
  );
};

export default Overview;
