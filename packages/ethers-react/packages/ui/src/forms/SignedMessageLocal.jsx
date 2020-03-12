/* --- Global --- */
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { withEthers, hooks } from "@ethers-react/system";
/* --- Component --- */
export const SignedMessageLocal = props => {
  const ethersProvider = withEthers();
  const { handleSubmit, register, errors } = useForm();

  const signatureRequest = hooks.useWalletSignMessage();

  const onSubmit = async values => {
    signatureRequest.init(ethersProvider.wallet, values.messageUnsigned);
  };

  useEffect(() => {
    console.log(signatureRequest);
  }, [signatureRequest]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <Molecule.Field
        name="messageUnsigned"
        placeholder="Message..."
        label="Message Unsigned"
        defaultValue="0x"
        register={register}
        errors={errors}
        sx={styles.field}
      />
      {signatureRequest.messageSigned && (
        <>
          <Atom.Span>Message:{signatureRequest.messageUnsigned}</Atom.Span>
          <br />
          <Atom.Span>Hash:{signatureRequest.messageSigned}</Atom.Span>
        </>
      )}

      <Atom.Button md rounded sx={styles.button}>
        {props.label}
      </Atom.Button>
      <Atom.Button
        type="button"
        md
        rounded
        sx={styles.button}
        onClick={() => signatureRequest.reset()}
      >
        Reset
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

SignedMessageLocal.defaultProps = {
  label: "Submit"
};
