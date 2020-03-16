/* --- Global --- */
import { useEffect, useReducer } from "react";
import { ToastContainer, Intent } from "@horizin/blueprint-system";

/* --- useTransactionToast : Effect --- */
export const useTransactionToast = tx => {
  /* ------------------- */
  // Reducer & State
  /* ------------------- */
  const initialState = {
    isBroadcast: false,
    isBroadcastError: false,
    isConfirmedAccept: false,
    isConfirmedFail: false,
    isRequesting: false,
    isRejected: false
  };

  function reducer(state, action) {
    switch (action.type) {
      case "broadcast":
        return {
          ...state,
          isBroadcast: true
        };
      case "BROADCAST_ERROR":
        return {
          ...state,
          isBroadcastError: true
        };
      case "confirmAccept":
        return {
          ...state,
          isConfirmedAccept: true
        };
      case "confirmFail":
        return {
          ...state,
          isConfirmedFail: true
        };
      case "IS_REQUESTING":
        return {
          ...state,
          isRequesting: true
        };
      case "rejected":
        return {
          ...state,
          isRejected: true
        };
      case "reset":
        return {
          ...state,
          isBroadcast: false,
          isConfirmedAccept: false,
          isConfirmedFail: false,
          isRejected: false
        };

      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  /* ------------------- */
  // Actions
  /* ------------------- */
  const reset = () => {
    dispatch({ type: "reset" });
  };

  /* ------------------- */
  // Effects
  /* ------------------- */

  useEffect(() => {
    {
      console.log(tx, "ConfirmingTransaction TXX");
    }
    if (tx.isRequesting && !state.isRequesting) {
      dispatch({ type: "IS_REQUESTING" });
      ToastContainer.show({
        message: "Request Dispatched",
        intent: Intent.PRIMARY
      });
    }
    if (tx.isRejected && !state.isRejected) {
      dispatch({ type: "rejected" });
      ToastContainer.show({
        message: "Request Rejected",
        intent: Intent.WARNING
      });
    }
    /* --- Confirmed : Transaction --- */
    if (tx.broadcastError && !state.isBroadcastError) {
      dispatch({ type: "BROADCAST_ERROR" });
      if (tx.broadcastErrorCode === -32603) {
        ToastContainer.show({
          message: "Invalid from Address",
          intent: Intent.DANGER
        });
      }
    }
    if (tx.isBroadcast && !state.isBroadcast) {
      dispatch({ type: "broadcast" });
      ToastContainer.show({
        message: "Transaction Broadcast",
        intent: Intent.PRIMARY
      });
    }
    /* --- Confirmed : Transaction --- */
    if (tx.isConfirmed && tx.receiptStatus && !state.isConfirmedAccept) {
      dispatch({ type: "confirmAccept" });
      ToastContainer.show({
        message: "Transaction Confirmed",
        intent: Intent.SUCCESS
      });
    }
    if (tx.isConfirmed && !tx.receiptStatus && !state.isConfirmedFail) {
      dispatch({ type: "confirmFail" });
      ToastContainer.show({
        message: "Transaction Rejected",
        intent: Intent.DANGER
      });
    }
  }, [tx]);

  return {
    reset
  };
};
