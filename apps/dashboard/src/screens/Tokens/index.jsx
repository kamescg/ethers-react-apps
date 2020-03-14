/* --- Global --- */
import {TokenTransfer} from '@ethers-react/tokens';

/* --- Local --- */

/* --- TokensScreen : Screen --- */
const TokensScreen = props => {
  return (
    <Atom.Box>
      <Main />
    </Atom.Box>
  );
};

const Main = props => {
  return (
    <Atom.Box sx={{}}>
      <TokenTransferDemo />
    </Atom.Box>
  );
};

const TokenTransferDemo = props => {
  return (
    <Atom.Flex>
      <Atom.Box sx={{flex: 1, p: 4}}>
        <Atom.Heading sx={{fontSize: [3, 3, 4]}}>Token Transfer</Atom.Heading>
        <Atom.Paragraph sm>
          Nam mattis commodo nunc vel hendrerit. Sed rhoncus lobortis semper.
          Donec in tellus eu enim semper ornare eget et felis. Etiam eu justo
          tincidunt, sollicitudin libero a, pellentesque odio.
        </Atom.Paragraph>
      </Atom.Box>
      <Atom.Flex center column sx={{bg: 'smoke', flex: 1, p: 4}}>
        <TokenTransfer contractName="MeshDevCoin" />
      </Atom.Flex>
    </Atom.Flex>
  );
};

export default TokensScreen;
