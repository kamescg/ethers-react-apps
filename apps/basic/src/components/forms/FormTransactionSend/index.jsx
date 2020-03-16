/* --- Global --- */
import {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {withEthers, hooks, utils} from '@ethers-react/system';

/* --- Local --- */
import {fieldDefault} from '@assets/styles';

/* --- FormTransactionSend : Component --- */
const FormTransactionSend = props => {
  const ethersProvider = withEthers();
  const {handleSubmit, register, errors} = useForm();

  const transactionRequest = hooks.useWalletSendTransaction();
  const estimateRequest = hooks.useWalletEstimateTransaction();

  const onSubmit = async values => {
    let tx = {
      to: values.address,
      value: utils.parseEther(values.amount),
      data: values.data,
    };
    transactionRequest.sendTransaction(tx);
  };

  const estimateTransaction = () => {
    let tx = {
      to: '0x5AdB8209b5276A23426994298FE9900644F57924',
      value: utils.parseEther('0.1'),
      data: '0x',
    };
    estimateRequest.estimateTransaction(tx);
  };

  useEffect(() => {
    // console.log(estimateRequest, 'estimate request form');
  }, [estimateRequest]);

  // useEffect(() => {
  //   console.log(transactionRequest, 'send transaction request');
  // }, [transactionRequest]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} style={{width: '100%'}}>
        <Molecule.Field
          name="address"
          placeholder="Address"
          label="Address"
          defaultValue={ethersProvider.address}
          register={register}
          errors={errors}
          sx={fieldDefault}
        />

        <Molecule.Field
          name="amount"
          placeholder="Amount"
          label="Amount"
          defaultValue="0.1"
          register={register}
          errors={errors}
          sx={fieldDefault}
        />
        <Molecule.Field
          name="data"
          placeholder="Data"
          label="Data"
          defaultValue="0x"
          register={register}
          errors={errors}
          sx={fieldDefault}
        />

        <Atom.Flex>
          <Atom.Button md m1 widthFill disabled={!ethersProvider.wallet}>
            {props.label}
          </Atom.Button>
          <Atom.Button
            md
            m1
            widthFill
            type="button"
            disabled={!ethersProvider.wallet}
            onClick={() => estimateTransaction()}>
            Estimate Transactions
          </Atom.Button>
        </Atom.Flex>
        {estimateRequest.estimate && (
          <>
            <Atom.Span block tag wordWrap sm>
              <strong>Estimate (wei):</strong> {estimateRequest.estimate.string}
            </Atom.Span>
          </>
        )}

        {transactionRequest.isRequesting && (
          <Atom.Span tag block sx={{mx: 'auto', textAlign: ' center'}}>
            Waiting for Response
          </Atom.Span>
        )}
        <Atom.Span>
          {transactionRequest.broadcast && (
            <Atom.Span>
              {transactionRequest.broadcast && transactionRequest.confirmed ? (
                <Atom.Span tag block sx={{mx: 'auto', textAlign: ' center'}}>
                  Transaction Confirmed{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://rinkeby.etherscan.io/tx/${transactionRequest.broadcast.hash}`}>
                    (Etherscan)
                  </a>
                </Atom.Span>
              ) : (
                <Atom.Span tag block sx={{mx: 'auto', textAlign: ' center'}}>
                  <Atom.Image
                    src="https://faviconer.net/preloaders/865/Ethereum%20logo%20revolving.gif"
                    sx={{width: 15}}
                  />
                  Waiting for Confirmation{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://rinkeby.etherscan.io/tx/${transactionRequest.broadcast.hash}`}>
                    (Etherscan)
                  </a>
                </Atom.Span>
              )}
            </Atom.Span>
          )}
        </Atom.Span>
        {transactionRequest.broadcast && transactionRequest.broadcast.hash && (
          <Atom.Span
            tag
            block
            wordWrap
            sm
            sx={{mx: 'auto', mt: 2, textAlign: ' center'}}>
            <strong>hash:</strong> {transactionRequest.broadcast.hash}
          </Atom.Span>
        )}

        {/* Broadcast Error */}
        {transactionRequest.broadcastError &&
          transactionRequest.broadcastError.code && (
            <Atom.Span tag block sx={{mx: 'auto', textAlign: ' center'}}>
              Rejected Transasction Request
            </Atom.Span>
          )}
      </form>
    </>
  );
};

FormTransactionSend.defaultProps = {
  label: 'Send Transaction',
};

export default FormTransactionSend;
