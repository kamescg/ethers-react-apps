/* --- Global --- */
import {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {withEthers, hooks} from '@ethers-react/system';

/* --- Component --- */
const WalletSignMessage = props => {
  const {handleSubmit, register, errors} = useForm();
  const [errorCode, setErrorCode] = useState();
  const signatureRequest = hooks.useWalletSignMessage();

  const onSubmit = async values => {
    signatureRequest.signMessage(values.messageUnsigned);
  };

  useEffect(() => {
    console.log(signatureRequest);
  }, [signatureRequest]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{width: '100%'}}>
      <Molecule.Field
        name="messageUnsigned"
        placeholder="Message..."
        label="Message Unsigned"
        defaultValue="0x"
        register={register}
        errors={errors}
        sx={styles.field}
      />
      {signatureRequest.messageSigned && (
        <>
          <Atom.Span block>
            <strong>Message:</strong>
            {signatureRequest.messageUnsigned}
          </Atom.Span>
          <Atom.Span block wordWrap sx={{mt: 3}}>
            <strong>Hash:</strong>
            {signatureRequest.messageSigned}
          </Atom.Span>
        </>
      )}
      <Atom.Flex>
        <Atom.Button md m1 sx={styles.button}>
          {props.label}
        </Atom.Button>
      </Atom.Flex>
      {signatureRequest.isRequesting && (
        <Atom.Span tag block sx={{mx: 'auto', textAlign: ' center'}}>
          Waiting for Response
        </Atom.Span>
      )}
      {signatureRequest.error && signatureRequest.error.code && (
        <Atom.Span tag block sx={{mx: 'auto', textAlign: ' center'}}>
          Rejected Signature Request
        </Atom.Span>
      )}
    </form>
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

WalletSignMessage.defaultProps = {
  label: 'Request Signature',
};

export default WalletSignMessage;
