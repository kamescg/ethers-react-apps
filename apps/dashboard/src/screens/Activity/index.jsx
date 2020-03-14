/* --- Global --- */
import {GetTransaction, GetTransactionReceipt} from '@ethers-react/ui';

/* --- Local --- */

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
      <ProviderGetTransaction />
      <Atom.HorizontalRule sx={{}} />
      <ProviderGetTransactionReceipt />
    </Atom.Box>
  );
};

const ProviderGetTransaction = props => {
  return (
    <Atom.Flex>
      <Atom.Box sx={{flex: 1, p: 4}}>
        <Atom.Heading sx={{fontSize: [3, 3, 4]}}>Get Transactions</Atom.Heading>
        <Atom.Paragraph sm>
          Nam mattis commodo nunc vel hendrerit. Sed rhoncus lobortis semper.
          Donec in tellus eu enim semper ornare eget et felis. Etiam eu justo
          tincidunt, sollicitudin libero a, pellentesque odio. Sed sed lectus
          enim. Donec placerat, erat vel commodo rutrum, libero leo pharetra
          felis, ultrices accumsan lacus dolor id tortor. Morbi ultrices massa
          ac purus tempor, ac pharetra felis blandit. Curabitur eu turpis dolor.
        </Atom.Paragraph>
      </Atom.Box>
      <Atom.Flex alignCenter sx={{bg: 'smoke', flex: 1, p: 4}}>
        <GetTransaction tx="0x9d6a1a0224dabc4b7261e7af08e5760bd476ff1a8d83dbaa5d282b0f0d3d8d82" />
      </Atom.Flex>
    </Atom.Flex>
  );
};

const ProviderGetTransactionReceipt = props => {
  return (
    <Atom.Flex>
      <Atom.Box sx={{flex: 1, p: 4}}>
        <Atom.Heading sx={{fontSize: [3, 3, 4]}}>
          Get Transaction Receipt
        </Atom.Heading>
        <Atom.Paragraph sm>
          Nam mattis commodo nunc vel hendrerit. Sed rhoncus lobortis semper.
          Donec in tellus eu enim semper ornare eget et felis. Etiam eu justo
          tincidunt, sollicitudin libero a, pellentesque odio. Sed sed lectus
          enim. Donec placerat, erat vel commodo rutrum, libero leo pharetra
          felis, ultrices accumsan lacus dolor id tortor. Morbi ultrices massa
          ac purus tempor, ac pharetra felis blandit. Curabitur eu turpis dolor.
        </Atom.Paragraph>
      </Atom.Box>
      <Atom.Flex alignCenter sx={{bg: 'smoke', flex: 1, p: 4}}>
        <GetTransactionReceipt tx="0x9d6a1a0224dabc4b7261e7af08e5760bd476ff1a8d83dbaa5d282b0f0d3d8d82" />
      </Atom.Flex>
    </Atom.Flex>
  );
};

export default Overview;
