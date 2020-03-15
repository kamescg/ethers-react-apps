/* --- Global --- */
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { hooks } from "@ethers-react/system";
import { ConfirmingTransaction } from "@ethers-react/ui";

/* --- TokenTransfer : Component --- */
export const TokenAllowance = ({ contractName, ...props }) => {
  /* --- Hooks : State --- */
  const contractTransaction = hooks.useContractRead(contractName);

  /* --- Local : State --- */
  const { handleSubmit, register, errors } = useForm();

  /* --- Actions : Form  --- */
  // Submit : Action : Form
  const onSubmit = async values => {
    contractTransaction.read({
      contractName,
      func: "allowance",
      inputs: [values.addressOwner, values.addressSpender]
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
        name="addressOwner"
        placeholder="Address (Owner)"
        defaultValue={props.valueAddressOwner}
        register={register}
        errors={errors}
        sx={props.sxField}
      />
      <Molecule.Field
        name="addressSpender"
        placeholder="Address (Spender)"
        defaultValue={props.valueAddressSpender}
        register={register}
        errors={errors}
        sx={props.sxField}
      />

      <Atom.Button md rounded sx={props.sxButton}>
        {props.label}
      </Atom.Button>
      <ConfirmingTransaction tx={contractTransaction} />
    </form>
  );
};

TokenAllowance.defaultProps = {
  label: "Approve",
  sxField: {},
  sxButton: {
    mt: 2,
    width: "100%"
  }
};
