/* --- Global --- */
import {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {withEthers, hooks} from '@ethers-react/system';

/* --- Component --- */
const WalletSignMessage = props => {
  /* ------------------- */
  // State : Component
  /* ------------------- */
  const {handleSubmit, register, errors} = useForm();
  const [errorCode, setErrorCode] = useState();

  /* ------------------- */
  // Hooks
  /* ------------------- */
  // Signed Type Message : Hook
  const signatureRequest = hooks.useWalletSignTypedMessage();

  /* ------------------- */
  // Actions: Form
  /* ------------------- */
  // Submit : Action : Form
  const onSubmit = async values => {
    const msgParams = [
      {
        type: 'string',
        name: 'Message',
        value: values.message,
      },
      {
        type: 'uint32',
        name: 'Integer',
        value: values.number,
      },
    ];
    signatureRequest.signMessage(msgParams);
  };

  useEffect(() => {
    console.log(signatureRequest);
  }, [signatureRequest]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{width: '100%'}}>
      <Molecule.Field
        name="message"
        placeholder="Message..."
        label="Message Unsigned"
        defaultValue="Ethereum Is Great"
        register={register}
        errors={errors}
        sx={styles.field}
      />
      <Molecule.Field
        name="number"
        type="number"
        placeholder="Number"
        label="Number"
        defaultValue={10}
        register={register}
        errors={errors}
        sx={styles.field}
      />
      {signatureRequest.messageSigned && (
        <Atom.Span block wordWrap sx={{mt: 3}}>
          <strong>Hash:</strong>
          {signatureRequest.messageSigned}
        </Atom.Span>
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
