/* --- Global --- */
import {withEthers} from '@ethers-react/system';
import {
  TokenBalance,
  TokenTransfer,
  TokenApprove,
  TokenAllowance,
  TokenTransferFrom,
} from '@ethers-react/tokens-blueprint';

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
      <Atom.HorizontalRule />
      <TokenApproveDemo />
      <Atom.HorizontalRule />
      <TokenAllowanceDemo />
      <Atom.HorizontalRule />
      <TokenTransferFromDemo />
    </Atom.Box>
  );
};

const TokenTransferDemo = props => {
  const ethers = withEthers();
  return (
    <Atom.Flex>
      <Atom.Box sx={{flex: 1, p: 4}}>
        <Atom.Heading sx={{fontSize: [3, 3, 4]}}>Token Transfer</Atom.Heading>
        <Atom.Paragraph sm>
          Nam mattis commodo nunc vel hendrerit. Sed rhoncus lobortis semper.
          Donec in tellus eu enim semper ornare eget et felis. Etiam eu justo
          tincidunt, sollicitudin libero a, pellentesque odio.
        </Atom.Paragraph>
        <TokenBalance contractName="MeshDevCoin" address={ethers.address} />
      </Atom.Box>
      <Atom.Flex center column sx={{bg: 'smoke', flex: 1, p: 4}}>
        <TokenTransfer
          contractName="MeshDevCoin"
          valueAddress="0x5AdB8209b5276A23426994298FE9900644F57924"
          valueAmount="1"
        />
      </Atom.Flex>
    </Atom.Flex>
  );
};

const TokenApproveDemo = props => {
  return (
    <Atom.Flex>
      <Atom.Box sx={{flex: 1, p: 4}}>
        <Atom.Heading sx={{fontSize: [3, 3, 4]}}>Token Approve</Atom.Heading>
        <Atom.Paragraph sm>
          Nam mattis commodo nunc vel hendrerit. Sed rhoncus lobortis semper.
          Donec in tellus eu enim semper ornare eget et felis. Etiam eu justo
          tincidunt, sollicitudin libero a, pellentesque odio.
        </Atom.Paragraph>
      </Atom.Box>
      <Atom.Flex center column sx={{bg: 'smoke', flex: 1, p: 4}}>
        <TokenApprove
          contractName="MeshDevCoin"
          valueAddress="0x5AdB8209b5276A23426994298FE9900644F57924"
          valueAmount="1"
        />
      </Atom.Flex>
    </Atom.Flex>
  );
};

const TokenAllowanceDemo = props => {
  return (
    <Atom.Flex>
      <Atom.Box sx={{flex: 1, p: 4}}>
        <Atom.Heading sx={{fontSize: [3, 3, 4]}}>Token Allowance</Atom.Heading>
        <Atom.Paragraph sm>
          Nam mattis commodo nunc vel hendrerit. Sed rhoncus lobortis semper.
          Donec in tellus eu enim semper ornare eget et felis. Etiam eu justo
          tincidunt, sollicitudin libero a, pellentesque odio.
        </Atom.Paragraph>
      </Atom.Box>
      <Atom.Flex center column sx={{bg: 'smoke', flex: 1, p: 4}}>
        <TokenAllowance
          contractName="MeshDevCoin"
          valueAddressOwner="0x5AdB8209b5276A23426994298FE9900644F57924"
          valueAmount="1"
        />
      </Atom.Flex>
    </Atom.Flex>
  );
};

const TokenTransferFromDemo = props => {
  return (
    <Atom.Flex>
      <Atom.Box sx={{flex: 1, p: 4}}>
        <Atom.Heading sx={{fontSize: [3, 3, 4]}}>
          Token Transfer from Approved
        </Atom.Heading>
        <Atom.Paragraph sm>
          Nam mattis commodo nunc vel hendrerit. Sed rhoncus lobortis semper.
          Donec in tellus eu enim semper ornare eget et felis. Etiam eu justo
          tincidunt, sollicitudin libero a, pellentesque odio.
        </Atom.Paragraph>
      </Atom.Box>
      <Atom.Flex center column sx={{bg: 'smoke', flex: 1, p: 4}}>
        <TokenTransferFrom
          contractName="MeshDevCoin"
          valueAddressOwner="0x5AdB8209b5276A23426994298FE9900644F57924"
          valueAmount="1"
        />
      </Atom.Flex>
    </Atom.Flex>
  );
};

export default TokensScreen;
