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

  /* --- Hooks : State --- */
  const contractSelector = selectors.useSelectContractByName(contractName);
  const contractTransaction = hooks.useContractSendTransaction();

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
      contractTransaction.setContract(contractSelector.contract.api);
    }
  }, [contractSelector]);

  /* ------------------- */
  // Form
  /* ------------------- */
  // Submit : Action : Form
  const onSubmit = async values => {
    try {
      contractTransaction.sendTransaction("transfer", [
        values.address,
        values.amount
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  /* --- Error : Effect --- */
  useEffect(() => {
    console.log(contractTransaction);
  }, [contractTransaction]);

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
      {contractTransaction && (
        <ConfirmingTransaction tx={contractTransaction} />
      )}
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
