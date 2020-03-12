import idx from "idx";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { withEthers } from "@ethers-react/system";

/* --- Component --- */
export const ApproveLocal = props => {
  const [transactionStatus, setTransactionStatus] = useState();
  const ethersProvider = withEthers();
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = async values => {
    let transaction = {
      to: values.address,
      value: ethersProvider.instance.utils.parseEther(values.amount)
    };
    try {
      const tx = await ethersProvider.wallet.sendTransaction(transaction);
      setTransactionStatus(tx);
    } catch (error) {
      setTransactionStatus(error);
    }
  };

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
        defaultValue="0.1"
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

ApproveLocal.defaultProps = {
  label: "Submit"
};
