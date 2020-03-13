/* --- Global --- */

/* --- Local --- */
import {FormGenerateCertificate} from '@forms';
// import {Introduction} from '@views';

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
    <Atom.Box sx={{m: 2}}>
      <Atom.Flex>
        <Atom.Box sx={{flex: 3, p: 3}}>
          <Atom.Heading xl>Generate CerticiateID</Atom.Heading>
          <Atom.HorizontalRule sx={{mb: 3}} />
          <FormGenerateCertificate />
        </Atom.Box>
        <Atom.Box sx={{flex: 1, p: 3}}>
          <Atom.Heading xl>Instructions</Atom.Heading>
          <Atom.Paragraph>
            To generate a certificate ID copy/paste the address of the Etheruem
            address and the ENS domain into the form.
          </Atom.Paragraph>
        </Atom.Box>
      </Atom.Flex>
    </Atom.Box>
  );
};

export default Overview;
