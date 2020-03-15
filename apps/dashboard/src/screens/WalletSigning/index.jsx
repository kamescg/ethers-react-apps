/* --- Global --- */
import {CodeHighlight} from '@horizin/molecules';

/* --- Local --- */
/* --- Local --- */
import {BlueprintDrawer} from '@components';
import {
  FormWalletSignMessage,
  FormWalletSignTypedMessage,
  FormWalletSignTypedMessageV3,
  FormWalletSignTypedMessageV4,
} from '@forms';

/* --- Module --- */
import {HookSignMessage} from './examples';

/* --- WalletSigning: Screen --- */
const WalletSigningScreen = () => {
  return (
    <Atom.Box>
      <Main />
    </Atom.Box>
  );
};

const Main = () => {
  return (
    <Atom.Box sx={{}}>
      <WalletSignMessageDemo />
      <Atom.HorizontalRule />
      <WalletSignTypedMessageDemo />
      <Atom.HorizontalRule />
      <WalletSignTypedMessageV3Demo />
      <Atom.HorizontalRule />
      <WalletSignTypedMessageV4Demo />
    </Atom.Box>
  );
};

const WalletSignMessageDemo = props => {
  return (
    <Atom.Flex>
      <Atom.Box sx={{flex: 1, p: 4}}>
        <Atom.Heading sx={{fontSize: [3, 3, 4]}}>Sign Message</Atom.Heading>
        <Atom.Paragraph sm>
          Nam mattis commodo nunc vel hendrerit. Sed rhoncus lobortis semper.
          Donec in tellus eu enim semper ornare eget et felis. Etiam eu justo
          tincidunt, sollicitudin libero a, pellentesque odio. Sed sed lectus
          enim. Donec placerat, erat vel commodo rutrum, libero leo pharetra
          felis, ultrices accumsan lacus dolor id tortor. Morbi ultrices massa
          ac purus tempor, ac pharetra felis blandit. Curabitur eu turpis dolor.
        </Atom.Paragraph>
        <BlueprintDrawer size={700}>
          <Atom.Button sm green>
            View Hook Code
          </Atom.Button>
          <HookSignMessage />
        </BlueprintDrawer>
      </Atom.Box>
      <Atom.Flex alignCenter sx={{bg: 'smoke', flex: 1, p: 4}}>
        <FormWalletSignMessage />
      </Atom.Flex>
    </Atom.Flex>
  );
};
const WalletSignTypedMessageDemo = props => {
  return (
    <Atom.Flex>
      <Atom.Box sx={{flex: 1, p: 4}}>
        <Atom.Heading sx={{fontSize: [3, 3, 4]}}>
          Sign Typed Message
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
        <FormWalletSignTypedMessage />
      </Atom.Flex>
    </Atom.Flex>
  );
};
const WalletSignTypedMessageV3Demo = props => {
  return (
    <Atom.Flex>
      <Atom.Box sx={{flex: 1, p: 4}}>
        <Atom.Heading sx={{fontSize: [3, 3, 4]}}>
          Sign Typed Message V3
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
        <FormWalletSignTypedMessageV3 />
      </Atom.Flex>
    </Atom.Flex>
  );
};
const WalletSignTypedMessageV4Demo = props => {
  return (
    <Atom.Flex>
      <Atom.Box sx={{flex: 1, p: 4}}>
        <Atom.Heading sx={{fontSize: [3, 3, 4]}}>
          Sign Typed Message V4
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
        <FormWalletSignTypedMessageV4 />
      </Atom.Flex>
    </Atom.Flex>
  );
};

export default WalletSigningScreen;
