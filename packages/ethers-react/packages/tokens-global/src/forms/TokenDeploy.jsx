/* --- Global --- */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { withEthers } from "@ethers-react/system";

/* --- Component --- */
export const TokenDeploy = props => {
  const { handleSubmit, register, errors } = useForm();
  const ethersProvider = withEthers();

  const onSubmit = async values => {
    try {
      let contract = {
        abi: props.contractAbi,
        bytecode: props.contractBytecode
      };
      ethersProvider.contractDeployRequest({
        contract,
        inputs: [
          values.name,
          values.symbol,
          values.decimals,
          values.totalSupply
        ]
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <Molecule.Field
        name="name"
        label="Name"
        placeholder="DevToken"
        register={register}
        errors={errors}
        sx={styles.field}
      />
      <Molecule.Field
        name="symbol"
        label="Symbol"
        placeholder="DEV"
        register={register}
        errors={errors}
        sx={styles.field}
      />
      <Molecule.Field
        name="decimals"
        label="Decimals"
        placeholder="18"
        type="number"
        register={register}
        errors={errors}
        sx={styles.field}
      />
      <Molecule.Field
        name="totalSupply"
        label="Total Supply"
        placeholder="1000000"
        type="number"
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

TokenDeploy.defaultProps = {
  label: "Submit"
};
