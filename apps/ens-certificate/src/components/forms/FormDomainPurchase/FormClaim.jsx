/* --- Global --- */
import Modal from 'react-modal';
import {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {withEthers, selectors, ethers} from '@ethers-react/system';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const RESOLVER = '0xdaaf96c344f63131acadd0ea35170e7892d3dfba';

/* --- Modal : Component --- */
const FormClaimOverlay = ({subdomain, ...props}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);
  return (
    <>
      <Atom.Button
        md
        // type="button"
        gradient="amin"
        direction={180}
        onClick={() => toggleOpen()}
        sx={styles.button}>
        Claim
      </Atom.Button>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleOpen}
        style={customStyles}
        contentLabel="Claim ENS Sub-Domain">
        <Atom.Heading normal sx={{fontSize: [4, 4, 5]}}>
          Claim You <strong>MillionDevs</strong> Sub-Domain
        </Atom.Heading>
        <Atom.Paragraph>
          Join the 1MillionDevs Community today with a limited edition domain.
        </Atom.Paragraph>
        <FormClaim
          subdomainDefault={subdomain}
          domainDefault="milliondevs"
          certificate={props.certificate}
        />
      </Modal>
    </>
  );
};

/* --- Form : Component --- */
const FormClaim = props => {
  const ethersProvider = withEthers();
  const {handleSubmit, register, errors} = useForm();
  const contractSelector = selectors.useSelectContractByName(
    'RapidSubdomainRegistrarMeta',
  );

  console.log(contractSelector, 'contractSelector');

  /* --- Submit : Action --- */
  const onSubmit = async values => {
    contractSelector.contract.api.registerCertificate(
      ethers.utils.id(values.domain), // Domain Hash
      values.subdomain, // Sub-Domain String
      ethersProvider.address, // User Address
      RESOLVER, // Sub-Domain Resolver
      values.certificate, // Domain Certificate
    );
  };

  return (
    <Atom.Box
      sx={{
        width: ['100%', 600, 600],
      }}>
      <form onSubmit={handleSubmit(onSubmit)} style={{width: '100%'}}>
        <Molecule.Field
          name="domain"
          label="Domain"
          placeholder="rapid"
          defaultValue={props.domainDefault}
          register={register}
          errors={errors}
          sx={styles.field}
          sxWrapper={{
            flex: 1,
          }}
        />
        <Molecule.Field
          name="subdomain"
          placeholder="Sub-Domain"
          label="Sub-Domain"
          defaultValue={props.subdomainDefault}
          register={register}
          errors={errors}
          sx={styles.field}
          sxWrapper={{
            flex: 1,
          }}
        />
        <Molecule.Field
          name="certificate"
          label="Certificate"
          placeholder="Certificate"
          defaultValue={props.certificate}
          as="textarea"
          register={register}
          errors={errors}
          sx={styles.field}
          sx={{
            minHeight: 150,
            flex: 1,
          }}
        />

        <Atom.Button
          md
          gradient="amin"
          direction={180}
          sx={{mt: 3, height: 50, flex: 1, width: 200}}>
          Claim Domain
        </Atom.Button>
      </form>
    </Atom.Box>
  );
};

const styles = {
  field: {
    borderColor: 'gray',
    borderWidth: 1,
    borderStyle: 'solid',
    boxShadow: 0,
    flex: 3,
    height: 50,
    p: 10,
    // width: "100%"
  },
  button: {
    height: 50,
    flex: 1,
    width: '100%',
  },
};

export default FormClaimOverlay;
