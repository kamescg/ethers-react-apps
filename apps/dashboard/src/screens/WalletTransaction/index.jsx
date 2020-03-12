/* --- Global --- */

/* --- Local --- */
import {FormTransactionSign, FormTransactionSend} from '@forms';

/* --- WalletSigning: Screen --- */
const WalletTransactionScreen = () => {
  return (
    <Atom.Box>
      <Main />
    </Atom.Box>
  );
};

const Main = () => {
  return (
    <Atom.Box sx={{}}>
      <TransactionSendDemo />
      <Atom.HorizontalRule sx={{}} />
      {/* <TransactionSignDemo /> */}
    </Atom.Box>
  );
};

const TransactionSignDemo = props => {
  return (
    <Atom.Flex>
      <Atom.Box sx={{flex: 1, p: 4}}>
        <Atom.Heading sx={{fontSize: [3, 3, 4]}}>Transaction Sign</Atom.Heading>
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
        <FormTransactionSign />
      </Atom.Flex>
    </Atom.Flex>
  );
};

const TransactionSendDemo = props => {
  return (
    <Atom.Flex>
      <Atom.Box sx={{flex: 1, p: 4}}>
        <Atom.Heading sx={{fontSize: [3, 3, 4]}}>Transaction Send</Atom.Heading>
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
        <FormTransactionSend />
      </Atom.Flex>
    </Atom.Flex>
  );
};

export default WalletTransactionScreen;
