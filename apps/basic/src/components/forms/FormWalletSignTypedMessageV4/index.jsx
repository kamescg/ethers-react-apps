/* --- Global --- */
import {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {withEthers, hooks} from '@ethers-react/system';

/* --- FormWalletSignMessageV4 : Form : Component --- */
const FormWalletSignMessageV4 = props => {
  const {handleSubmit, register, errors} = useForm();
  const signatureRequest = hooks.useWalletSignTypedMessageV4();

  const onSubmit = async values => {
    // Sample
    const domain = [
      {name: 'name', type: 'string'},
      {name: 'version', type: 'string'},
      {name: 'chainId', type: 'uint256'},
      {name: 'verifyingContract', type: 'address'},
      {name: 'salt', type: 'bytes32'},
    ];
    const bid = [
      {name: 'amount', type: 'uint256'},
      {name: 'bidder', type: 'Identity'},
    ];
    const identity = [
      {name: 'userId', type: 'uint256'},
      {name: 'wallet', type: 'address'},
    ];

    const domainData = {
      name: 'Horizin',
      version: '2',
      chainId: parseInt(web3.version.network, 10),
      verifyingContract: '0x1C56346CD2A2Bf3202F771f50d3D14a367B48070',
      salt:
        '0xf2d857f4a3edcb9b78b4d503bfe733db1e3f6cdc2b7971ee739626c97e86a558',
    };
    var message = {
      amount: 100,
      bidder: {
        userId: 323,
        wallet: '0x3333333333333333333333333333333333333333',
      },
    };

    const data = JSON.stringify({
      types: {
        EIP712Domain: domain,
        Bid: bid,
        Identity: identity,
      },
      domain: domainData,
      primaryType: 'Bid',
      message: message,
    });
    signatureRequest.signMessage(data);
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

FormWalletSignMessageV4.defaultProps = {
  label: 'Submit',
};

export default FormWalletSignMessageV4;
