/* --- Global --- */

/* --- Local --- */
import {FormDomainClaim} from '@forms';

/* --- Page : Component --- */
const SubDomainRegistrationScreen = props => {
  return (
    <Atom.Flex sx={{flex: 1, height: '100%', width: '100%'}}>
      <Main />
    </Atom.Flex>
  );
};

const Main = props => {
  return (
    <Atom.Flex
      center
      column
      sx={{
        height: '100%',
        py: 5,
        flex: 1,
        width: '100%',
      }}>
      <Atom.BackgroundGradient gradient="bluePurple" />
      <Atom.Container
        sx={{
          color: 'white',
          maxWidth: ['100%', '100%', 880, 1080],
          py: [5],
        }}>
        <Atom.Flex center column>
          {/* <Atom.Heading md>#1MillionDevs ENS Sub-Domain</Atom.Heading> */}
          <Atom.Heading as="h1" giga sx={{textAlign: 'center'}}>
            <Atom.Span sx={{fontWeight: 300}}>Claim Domain</Atom.Span>
            <br />
          </Atom.Heading>
          <Atom.Flex center sx={{width: ['100%', '100%', 700]}}>
            <FormDomainClaim />
          </Atom.Flex>
          <Atom.Heading md sx={{mt: 3}}>
            #1MillionDevs ENS Sub-Domain
          </Atom.Heading>
        </Atom.Flex>
      </Atom.Container>
    </Atom.Flex>
  );
};

export default SubDomainRegistrationScreen;
