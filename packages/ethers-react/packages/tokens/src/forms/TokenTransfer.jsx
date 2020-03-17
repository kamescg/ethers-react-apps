/* --- Global --- */
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { hooks } from "@ethers-react/system";
import { ConfirmingTransaction } from "@ethers-react/ui";

/* --- TokenTransfer : Component --- */
export const TokenTransfer = ({ contractName, ...props }) => {
  /* --- Hooks : State --- */
  const contractTransaction = hooks.useContractSendTransaction(contractName);

  /* --- Local : State --- */
  const { handleSubmit, register, errors } = useForm();

  /* --- Actions : Form  --- */
  // Submit : Action : Form
  const onSubmit = async values => {
    contractTransaction.sendTransaction({
      contractName,
      func: "transfer",
      inputs: [values.address, values.amount],
      params: {}
    });
  };

  /* --- Error : Effect --- */
  useEffect(() => {
    console.log(contractTransaction, "contractTransaction TokenTransfer");
  }, [contractTransaction]);

  /* --- TokenTransfer : Form : Compoent --- */
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <Molecule.Field
        name="address"
        placeholder="Address"
        defaultValue={props.valueAddress}
        register={register}
        errors={errors}
        sx={props.sxField}
      />

      <Molecule.Field
        name="amount"
        placeholder="Amount"
        defaultValue={props.valueAmount}
        register={register}
        errors={errors}
        sx={props.sxField}
      />

      <Atom.Button
        md
        rounded
        disabled={!contractTransaction.isContractConnected}
        sx={props.sxButton}
      >
        {props.label}
      </Atom.Button>
      <ConfirmingTransaction tx={contractTransaction} />
    </form>
  );
};

TokenTransfer.defaultProps = {
  label: "Transfer",
  sxField: {},
  sxButton: {
    mt: 2,
    width: "100%"
  }
};
