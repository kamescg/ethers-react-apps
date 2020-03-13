/* --- Global --- */
import Modal from 'react-modal';
import {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {hooks} from '@ethers-react/system';
import {withEthers, selectors, utils, ethers} from '@ethers-react/system';

// Modal.setAppElement('#root');
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

const RESOLVER = '';

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
        <FormClaim subdomainDefault={subdomain} domainDefault="milliondevs" />
      </Modal>
    </>
  );
};

/* --- Form : Component --- */
const FormClaim = props => {
  const {handleSubmit, register, errors} = useForm();
  const transactionRequest = hooks.useWalletSendTransaction({});
  const contractSelector = selectors.useSelectContractByName(
    'RapidSubdomainRegistrarMeta',
  );

  /* --- Submit : Action --- */
  const onSubmit = async values => {
    // let tx = {
    //   to: values.address,
    //   value: ethersProvider.instance.utils.parseEther(values.amount),
    //   data: values.data,
    // };

    contractSelector.api.registerCertificate(
      ethers.uitls.id(values.domain), // Domain Hash
      values.subdomain, // Sub-Domain String
      ethersProvider.address, // User Address
      RESOLVER, // Sub-Domain Resolver
      values.certificate, // Domain Certificate
    );
  };

  /* --- Transaction : Effect --- */
  // useEffect(() => {
  //   console.log(transactionRequest);
  // }, [transactionRequest]);

  return (
    <Atom.Box
      sx={{
        width: ['100%', 600, 600],
      }}>
      <form onSubmit={handleSubmit(onSubmit)} style={{width: '100%'}}>
        <Molecule.Field
          name="Domain"
          label="Domain"
          placeholder="milliondevs.eth"
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
          sx={{mt: 3, height: 50, flex: 1, width: '100%'}}>
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
