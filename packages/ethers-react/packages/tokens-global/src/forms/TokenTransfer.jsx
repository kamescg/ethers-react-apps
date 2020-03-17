/* --- Global --- */
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { withEthers, utils } from "@ethers-react/system";

/* --- TokenTransfer : Component --- */
export const TokenTransfer = ({ contractName, ...props }) => {
  const ethers = withEthers();

  /* --- Hooks : State --- */

  /* --- Local : State --- */
  const { handleSubmit, register, errors } = useForm();

  /* --- Actions : Form  --- */
  // Submit : Action : Form
  const onSubmit = async values => {
    const tx = {
      to: "0x5AdB8209b5276A23426994298FE9900644F57924",
      value: utils.parseEther("1.0"),
      data: "0x"
    };

    ethers.walletSendTransactionRequest(tx);
  };

  /* --- Error : Effect --- */
  useEffect(() => {
    console.log(ethers, "ethers.useWalletSendTransactionRequest");
  }, [ethers]);

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

      <Atom.Button md rounded disabled={!ethers.wallet} sx={props.sxButton}>
        {props.label}
      </Atom.Button>
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
