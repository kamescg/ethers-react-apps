import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { withEthers } from "@ethers-react/system";

/* --- Component --- */
export const TransferLocal = ({ contractAddress, ...props }) => {
  const { handleSubmit, register, errors } = useForm();
  const [transferStatus, setTransferStatus] = useState();
  const [transferStatusError, setTransferStatusError] = useState();

  /* --- Ethers Provider --- */
  const ethersProvider = withEthers();

  const onSubmit = async values => {
    try {
      const transferDispatch = ethersProvider.contracts[
        "DevToken"
      ].api.transfer(values.address, values.amount, {
        gasLimit: 100000
      });
    } catch (error) {
      setTransferStatusError(error);
      console.log(error);
    }
  };

  /* --- Error : Effect --- */
  useEffect(() => {
    console.log(transferStatusError);
  }, [transferStatusError]);

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
        defaultValue="100000000000000000"
        register={register}
        errors={errors}
        sx={styles.field}
      />

      <Atom.Button md rounded sx={styles.button}>
        {props.label}
      </Atom.Button>
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

TransferLocal.defaultProps = {
  label: "Submit"
};
