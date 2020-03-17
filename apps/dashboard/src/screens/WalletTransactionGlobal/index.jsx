/* --- Global --- */
import {withEthers} from '@ethers-react/system';
import {Transaction} from '@ethers-react/ui-global';

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
      <TransactionDemo />
      <Atom.HorizontalRule />
    </Atom.Box>
  );
};

const TransactionDemo = props => {
  const ethers = withEthers();
  return (
    <Atom.Flex>
      <Atom.Box sx={{flex: 1, p: 4}}>
        <Atom.Heading sx={{fontSize: [3, 3, 4]}}>Transaction</Atom.Heading>
        <Atom.Paragraph sm>
          Nam mattis commodo nunc vel hendrerit. Sed rhoncus lobortis semper.
          Donec in tellus eu enim semper ornare eget et felis. Etiam eu justo
          tincidunt, sollicitudin libero a, pellentesque odio.
        </Atom.Paragraph>
      </Atom.Box>
      <Atom.Flex center column sx={{bg: 'smoke', flex: 1, p: 4}}>
        <Transaction
          contractName="MeshDevCoin"
          valueAddress="0x5AdB8209b5276A23426994298FE9900644F57924"
          valueAmount="1"
        />
      </Atom.Flex>
    </Atom.Flex>
  );
};

export default TokensScreen;
