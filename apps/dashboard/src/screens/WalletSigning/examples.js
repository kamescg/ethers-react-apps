import {CodeHighlight} from '@horizin/molecules';

export const HookSignMessage = props => {
  return (
    <CodeHighlight>
      {`
/**
 * @function useWalletSignMessage
 * @description Sign messages using the application wallet.
 */

/* --- Global --- */
import { useState, useEffect } from "react";
import withEthers from "../withContext";

/* --- useWalletSignMessage : hook --- */
export const useWalletSignMessage = props => {
  /* --- Global : State --- */
  const ethersProvider = withEthers();

  /* --- Local : State --- */
  const [isRequesting, setIsWaitingResponse] = useState(false);
  const [messageUnsigned, setMessageUnsigned] = useState(undefined);
  const [messageSigned, setMessageSigned] = useState(undefined);

  /* --- Error : State --- */
  const [messageSignedError, setMessageSignedError] = useState(undefined);

  /* ------------------- */
  // Actions : Hook
  /* ------------------- */

  /* --- Initialize : Action : Hook --- */
  const signMessage = msg => {
    setMessageUnsigned(msg);
    setMessageSigned(undefined);
    setIsWaitingResponse(true);
  };

  /* --- Sign Message :: Effect --- */
  useEffect(() => {
    if (messageUnsigned && isRequesting) {
      (async () => {
        try {
          const messageSigned = await ethersProvider.wallet.signMessage(
            messageUnsigned
          );
          setIsWaitingResponse(false);
          setMessageSigned(messageSigned);
        } catch (error) {
          setIsWaitingResponse(false);
          setMessageSignedError(error);
        }
      })();
    }
  }, [messageUnsigned, isRequesting]);

  /* --- Return : Complete --- */
  return {
    signMessage,
    messageSigned,
    messageUnsigned,
    isRequesting,
    error: messageSignedError
  };
};
`}
    </CodeHighlight>
  );
};
