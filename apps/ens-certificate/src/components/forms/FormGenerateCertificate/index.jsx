/* --- Global --- */
import {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {hooks, selectors, utils} from '@ethers-react/system';

/* --- Component --- */
const FormGenerateCertificate = props => {
  const {handleSubmit, register, errors} = useForm();

  const [certificateId, setCertificateId] = useState();
  const [signedCertificateId, setSignedCertificateId] = useState();

  /* --- Ethers : Hooks --- */
  const useWalletSignMessageHook = hooks.useWalletSignMessage();
  const contractSelector = selectors.useSelectContractByName(
    'RapidSubdomainRegistrarMeta',
  );

  /* --- Submit : Action --- */
  const signCertificateRequest = () => {
    useWalletSignMessageHook.signMessage(certificateId);
  };

  useEffect(() => {
    if (!signedCertificateId && useWalletSignMessageHook.messageSigned)
      setSignedCertificateId(useWalletSignMessageHook.messageSigned);
  }, [useWalletSignMessageHook]);

  /* --- Submit : Action --- */
  const onSubmit = async values => {
    const certificateId = await contractSelector.contract.api.certificateId(
      utils.id(values.domain),
      values.address,
    );
    setCertificateId(utils.arrayify(certificateId));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} style={{width: '100%'}}>
        <Molecule.Field
          name="domain"
          placeholder="Domain"
          label="Domain"
          defaultValue={'milliondevs'}
          register={register}
          errors={errors}
          sx={styles.field}
        />
        <Molecule.Field
          name="address"
          placeholder="Address"
          label="Address"
          register={register}
          errors={errors}
          sx={styles.field}
        />

        <Atom.Flex sx={{bg: 'smoke', p: 3, textAlign: 'center'}}>
          <Atom.Box sx={{flex: 1, textAlign: 'center'}}>
            <Atom.Span md sx={{wordBreak: 'break-all'}}>
              {certificateId}
            </Atom.Span>
            <Atom.Heading as="h6" sm>
              Generated Certificate ID
            </Atom.Heading>
          </Atom.Box>
          <Atom.Box sx={{flex: 1, textAlign: 'center'}}>
            <Atom.Span md sx={{wordBreak: 'break-all'}}>
              {signedCertificateId}
            </Atom.Span>
            <Atom.Heading as="h6" sm>
              Signed Certificate
            </Atom.Heading>
          </Atom.Box>
        </Atom.Flex>
        <Atom.Flex>
          <Atom.Button md m2 gradient="green" sx={styles.button}>
            Generate CertificateID
          </Atom.Button>
          <Atom.Button
            md
            m2
            gradient="amin"
            type="button"
            onClick={signCertificateRequest}
            sx={styles.button}>
            Sign Certificate
          </Atom.Button>
        </Atom.Flex>
      </form>
    </>
  );
};

const styles = {
  field: {
    borderColor: 'gray',
    borderWidth: 1,
    borderStyle: 'solid',
    boxShadow: 0,
    p: 10,
    my: 1,
    width: '100%',
  },
  button: {
    mt: 2,
    width: '100%',
  },
};

FormGenerateCertificate.defaultProps = {
  label: 'Submit',
};

export default FormGenerateCertificate;
