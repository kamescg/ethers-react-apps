/* --- Global --- */

/* --- Module --- */
import {
  ConnectToNetwork,
  TransactionDemo,
  SigningMessageDemo,
  SigningTypedMessageDemo,
} from './sections';
/* --- HomeScreen : Screen --- */
const HomeScreen = props => {
  return (
    <>
      <Main />
    </>
  );
};

const Main = props => {
  return (
    <Atom.Flex column sx={{flex: 1, width: '100%'}}>
      <ConnectToNetwork />
      <Atom.HorizontalRule sx={{}} />
      <TransactionDemo />
      <Atom.HorizontalRule sx={{}} />
      <SigningMessageDemo />
      <Atom.HorizontalRule sx={{}} />
      <SigningTypedMessageDemo />
    </Atom.Flex>
  );
};

export default HomeScreen;
