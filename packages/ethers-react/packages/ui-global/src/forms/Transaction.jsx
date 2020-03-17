/* --- Global --- */
import { useForm } from "react-hook-form";
import { withEthers, utils } from "@ethers-react/system";

/* --- Transaction : Component --- */
export const Transaction = props => {
  const ethersProvider = withEthers();
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = async values => {
    let tx = {
      to: values.address,
      value: utils.parseEther(values.amount),
      data: values.data
    };
    ethersProvider.walletSendTransactionRequest(tx);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <Molecule.Field
        name="address"
        placeholder="Address"
        label="Address"
        defaultValue={ethersProvider.address}
        register={register}
        errors={errors}
        sx={{}}
      />

      <Molecule.Field
        name="amount"
        placeholder="Amount"
        label="Amount"
        defaultValue="0.1"
        register={register}
        errors={errors}
        sx={{}}
      />
      <Molecule.Field
        name="data"
        placeholder="Data"
        label="Data"
        defaultValue="0x"
        register={register}
        errors={errors}
        sx={{}}
      />

      <Atom.Button
        md
        rounded
        sx={{
          mt: 2,
          width: "100%"
        }}
      >
        {props.label}
      </Atom.Button>
    </form>
  );
};

Transaction.defaultProps = {
  label: "Submit"
};
