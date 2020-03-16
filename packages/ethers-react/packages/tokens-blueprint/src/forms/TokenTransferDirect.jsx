/* --- Global --- */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { withEthers, hooks, selectors } from "@ethers-react/system";
import { EtherscanHash } from "@ethers-react/ui-etherscan";
import { ConfirmingTransaction } from "@ethers-react/ui";

/* --- Component --- */
export const TokenTransfer = ({ contractAddress, contractName, ...props }) => {
  /* ------------------- */
  // State
  /* ------------------- */
  /* --- Global : State --- */

  /* --- Local : State --- */
  const { handleSubmit, register, errors } = useForm();
  const [contractToken, setContractToken] = useState(undefined);
  const [transaction, setTransaction] = useState();
  const [transferStatus, setTransferStatus] = useState(0);
  const [transferStatusError, setTransferStatusError] = useState();

  /* --- Hooks : State --- */
  // console.log(contractName, "contractName");
  const contractSelector = selectors.useSelectContractByName(contractName);
  const transactionWatch = hooks.useTransactionWatch();
  const contractTransaction = hooks.useContractSendTransaction();

  useEffect(() => {
    console.log(transactionWatch);
  }, [transactionWatch]);
  /* ------------------- */
  // Effets
  /* ------------------- */
  /* --- Select Contract : Effect --- */
  useEffect(() => {
    if (
      contractSelector.isFound &&
      contractSelector.contract.api &&
      !contractToken
    ) {
      setContractToken(contractSelector.contract);
      contractTransaction.setContract(
        contractSelector.contract.api,
        "transfer"
      );
    }
  }, [contractSelector]);

  /* ------------------- */
  // Form
  /* ------------------- */
  // Submit : Action : Form
  const onSubmit = async values => {
    try {
      setTransferStatus(0);
      contractTransaction.sendTransction("transfer", [
        values.address,
        values.amount
      ]);
      // const transferDispatch = await contractToken.api.transfer(
      //   values.address,
      //   values.amount,
      //   {
      //     gasLimit: 100000
      //   }
      // );
      setTransaction(transferDispatch);
      transactionWatch.watch(transferDispatch.hash);
      setTransferStatus(1);
    } catch (error) {
      setTransferStatus(-1);
      setTransferStatusError(-1);
      console.log(error);
    }
  };

  /* --- Error : Effect --- */
  useEffect(() => {
    console.log(transferStatusError);
  }, [transferStatusError]);

  console.log(transactionWatch, "transactionWatch");

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <Molecule.Field
        name="address"
        placeholder="Address"
        defaultValue="0x5AdB8209b5276A23426994298FE9900644F57924"
        register={register}
        errors={errors}
        sx={styles.field}
      />

      <Molecule.Field
        name="amount"
        placeholder="Amount"
        defaultValue="1"
        register={register}
        errors={errors}
        sx={styles.field}
      />

      <Atom.Button md rounded disabled={!contractToken} sx={styles.button}>
        {props.label}
      </Atom.Button>
      <Atom.Box>
        {transactionWatch.isTransactionDispatched && (
          <Atom.Span block tag>
            Requesting Confirmation
          </Atom.Span>
        )}
        {transferStatus === 1 && (
          <Atom.Span block tag>
            Transaction Dispatched
          </Atom.Span>
        )}
        {transferStatus === -1 && (
          <Atom.Span block tag>
            Transaction Rejected
          </Atom.Span>
        )}
        {transaction && transaction.hash && (
          <ConfirmingTransaction hash={transaction.hash} />
        )}
      </Atom.Box>
    </form>
  );
};

const styles = {
  field: {
    borderColor: "gray",
    borderWidth: 1,
    borderStyle: "solid",
    boxShadow: 0,
    p: 10,
    my: 1,
    width: "100%"
  },
  button: {
    mt: 2,
    width: "100%"
  }
};

TokenTransfer.defaultProps = {
  label: "Submit"
};
