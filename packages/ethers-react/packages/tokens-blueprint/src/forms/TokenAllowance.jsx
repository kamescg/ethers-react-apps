/* --- Global --- */
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { hooks, withEthers } from "@ethers-react/system";
import { useReadToast } from "@ethers-react/ui-blueprint";
import { BigNumberToString, Address } from "@ethers-react/ui";

/* --- TokenTransfer : Component --- */
export const TokenAllowance = ({ contractName, ...props }) => {
  const ethers = withEthers();

  /* --- Hooks : State --- */
  const contractTransaction = hooks.useContractRead(contractName);
  const toast = useReadToast(contractTransaction);

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
    toast.reset();
  };

  useEffect(() => {
    if (contractTransaction.data)
      toast.setMsg(
        <Atom.Span>
          <strong>Allowance:</strong>
          {contractTransaction.data.toString()}
        </Atom.Span>
      );
  }, [contractTransaction.data]);

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

      <Atom.Button md rounded disabled={!ethers.provider} sx={props.sxButton}>
        {props.label}
      </Atom.Button>
      <BigNumberToString
        block
        tag
        bigNumber={contractTransaction.data}
        label="Allowance:"
        sxLabel={{
          fontWeight: 700
        }}
      />
    </form>
  );
};

TokenAllowance.defaultProps = {
  label: "Get Allowance",
  sxField: {},
  sxButton: {
    mt: 2,
    width: "100%"
  }
};
