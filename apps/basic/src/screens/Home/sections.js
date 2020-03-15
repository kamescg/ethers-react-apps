/* --- Global --- */
import {GetTransaction} from '@ethers-react/ui';

/* --- Local --- */
import {
  Address,
  BlockCurrent,
  NetworkID,
  NetworkName,
  ProviderSelect,
  WalletBalance,
} from '@ethers-react/ui';
import {FormTransactionSign, FormTransactionSend} from '@forms';
import {
  FormWalletSignMessage,
  FormWalletSignTypedMessage,
  FormWalletSignTypedMessageV3,
  FormWalletSignTypedMessageV4,
} from '@forms';

/* --- TransactionDemo : Section --- */
export const ConnectToNetwork = props => {
  return (
    <Atom.Flex
      column
      center
      gradient="smoke"
      sx={{
        color: 'text',
        minHeight: '70vh',
        py: [3, 3, 4],
        width: '100%',
      }}>
      <Atom.Container>
        <Atom.Box sx={{textAlign: 'center'}}>
          <Atom.Heading as="h3" sx={{fontSize: [4, 4, 5, 6]}}>
            Basic Demo
          </Atom.Heading>
          <Atom.Heading as="h5" sx={{fontSize: [2, 2, 3]}}>
            Ethers React
          </Atom.Heading>
          <ProviderSelect />
          <Atom.Flex sx={{my: [4, 4, 5]}}>
            {/* 1 : Area */}
            <Atom.Box sx={{flex: 1, textAlign: 'center'}}>
              <Atom.Span tag sm sx={{ml: 2}}>
                <strong>Address:</strong> <Address trim={7} />
              </Atom.Span>
            </Atom.Box>
            {/* 1 : Area */}
            <Atom.Box sx={{flex: 1, textAlign: 'center'}}>
              <Atom.Span tag sm sx={{ml: 2}}>
                <strong>Network:</strong> <NetworkName />
              </Atom.Span>
            </Atom.Box>
            {/* 1 : Area */}
            <Atom.Box sx={{flex: 1, textAlign: 'center'}}>
              <Atom.Span tag sm sx={{ml: 2}}>
                <strong>Current Block: </strong>
                <BlockCurrent />
              </Atom.Span>
            </Atom.Box>
            {/* 1 : Area */}
            <Atom.Box sx={{flex: 1, textAlign: 'center'}}>
              <Atom.Span tag sm sx={{ml: 2}}>
                <strong>Balance: </strong>
                <WalletBalance trimmed={6} />
              </Atom.Span>
            </Atom.Box>
          </Atom.Flex>
        </Atom.Box>
      </Atom.Container>
    </Atom.Flex>
  );
};

/* --- TransactionDemo : Section --- */
export const TransactionDemo = props => {
  return (
    <Atom.Flex
      column
      center
      gradient="amin"
      sx={{
        bg: 'blue',
        color: 'white',
        minHeight: '70vh',
        py: [3, 3, 4],
        width: '100%',
      }}>
      <Atom.Container>
        <Atom.Flex alignCenter>
          {/* Left Region */}
          <Atom.Box sx={{flex: 1, p: 5}}>
            <Atom.Heading sx={{fontSize: [3, 3, 4]}}>
              Wallet Transaction
            </Atom.Heading>
            <Atom.Paragraph sm>
              Iinitialize a transaction using the{' '}
              <strong>useWalletSendTransaction</strong> hook.
            </Atom.Paragraph>
            <Atom.Paragraph sm>
              The hook handles Wallet management and returns important
              transaction states: <em>requesting, broadcast and confirmed.</em>
            </Atom.Paragraph>
            <a
              href="http://github.com/kamescg/ethers-react"
              target="_blank"
              rel="noopener noreferrer">
              <Atom.Button white sm>
                Documentation
              </Atom.Button>
            </a>
          </Atom.Box>
          {/* Right Region */}
          <Atom.Flex
            alignCenter
            sx={{
              bg: 'smoke',
              boxShadow: 3,
              borderRadius: 15,
              color: 'text',
              flex: 1,
              p: 5,
            }}>
            <FormTransactionSend />
          </Atom.Flex>
        </Atom.Flex>
      </Atom.Container>
    </Atom.Flex>
  );
};

/* --- TransactionDemo : Section --- */
export const SigningMessageDemo = props => {
  return (
    <Atom.Flex
      column
      center
      gradient="amin"
      sx={{
        bg: 'blue',
        color: 'white',
        minHeight: '70vh',
        width: '100%',
      }}>
      <Atom.Container>
        <Atom.Flex alignCenter>
          {/* Left Region */}
          <Atom.Box sx={{flex: 1, p: 5}}>
            <Atom.Heading sx={{fontSize: [3, 3, 4]}}>
              Sign Messages
            </Atom.Heading>
            <Atom.Paragraph sm>
              Iinitialize a transaction using the{' '}
              <strong>useWalletSendTransaction</strong> hook.
            </Atom.Paragraph>
            <Atom.Paragraph sm>
              The hook handles Wallet management and returns important
              transaction states: <em>requesting, broadcast and confirmed.</em>
            </Atom.Paragraph>
            <a
              href="http://github.com/kamescg/ethers-react"
              target="_blank"
              rel="noopener noreferrer">
              <Atom.Button white sm>
                Documentation
              </Atom.Button>
            </a>
          </Atom.Box>
          {/* Right Region */}
          <Atom.Flex
            alignCenter
            sx={{
              bg: 'smoke',
              color: 'text',
              flex: 1,
              p: 5,
            }}>
            <FormWalletSignMessage />
          </Atom.Flex>
        </Atom.Flex>
      </Atom.Container>
    </Atom.Flex>
  );
};

/* --- SigningTypedMessageDemo : Section --- */
export const SigningTypedMessageDemo = props => {
  return (
    <Atom.Flex
      column
      center
      gradient="amin"
      sx={{
        bg: 'blue',
        color: 'white',
        minHeight: '70vh',
        width: '100%',
      }}>
      <Atom.Container>
        <Atom.Flex alignCenter>
          {/* Left Region */}
          <Atom.Box sx={{flex: 1, p: 5}}>
            <Atom.Heading sx={{fontSize: [3, 3, 4]}}>
              Sign Typed Messages
            </Atom.Heading>
            <Atom.Paragraph sm>
              Iinitialize a transaction using the{' '}
              <strong>useWalletSendTransaction</strong> hook.
            </Atom.Paragraph>
            <Atom.Paragraph sm>
              The hook handles Wallet management and returns important
              transaction states: <em>requesting, broadcast and confirmed.</em>
            </Atom.Paragraph>
            <a
              href="http://github.com/kamescg/ethers-react"
              target="_blank"
              rel="noopener noreferrer">
              <Atom.Button white sm>
                Documentation
              </Atom.Button>
            </a>
          </Atom.Box>
          {/* Right Region */}
          <Atom.Flex
            alignCenter
            sx={{
              bg: 'smoke',
              color: 'text',
              flex: 1,
              p: 5,
            }}>
            <FormWalletSignTypedMessage />
          </Atom.Flex>
        </Atom.Flex>
      </Atom.Container>
    </Atom.Flex>
  );
};
