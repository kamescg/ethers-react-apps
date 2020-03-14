/* --- Global --- */
import {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {withEthers, hooks, selectors, utils} from '@ethers-react/system';

import QRReader from 'react-qr-reader';

/* --- Component --- */
const FormGenerateCertificate = props => {
  const [address, setAddress] = useState(undefined);
  const ethersProvider = withEthers();
  const {handleSubmit, register, errors} = useForm();

  const [certificateId, setCertificateId] = useState();
  const [signedCertificateId, setSignedCertificateId] = useState();

  /* --- Ethers : Hooks --- */
  const useWalletSignMessageHook = hooks.useWalletSignMessage();
  const contractSelector = selectors.useSelectContractByName(
    'RapidSubdomainRegistrarMeta',
  );

  console.log(contractSelector, 'contractSelector');

  /* --- Submit : Action --- */
  const signCertificateRequest = () => {
    useWalletSignMessageHook.init(certificateId);
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

  useEffect(() => {
    console.log(contractSelector);
  }, [contractSelector]);

  /* --- QRCode : Effects --- */
  const handleError = err => {
    console.log(err);
  };
  const handleScan = data => {
    console.log(data);

    if (data) {
      const address = data.slice(9);
      console.log(address, 'address');
      setAddress(address);
    }
  };

  return (
    <>
      <Atom.Box sx={{width: 250}}>
        {!address && <QRReader onError={handleError} onScan={handleScan} />}
      </Atom.Box>
      <form onSubmit={handleSubmit(onSubmit)} style={{width: '100%'}}>
        <Atom.Heading sx="h5" lg>
          Step 1: Generate Certificate
        </Atom.Heading>
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
          defaultValue={address}
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
