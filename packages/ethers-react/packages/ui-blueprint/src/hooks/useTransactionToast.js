/* --- Global --- */
import { useEffect, useReducer } from "react";
import { ToastContainer, Intent } from "@horizin/blueprint-system";
/* --- Effect --- */
export const useTransactionToast = tx => {
  /* ------------------- */
  // Reducer & State
  /* ------------------- */
  const initialState = {
    isBroadcast: false,
    isConfirmedAccept: false,
    isConfirmedFail: false,
    isRejected: false
  };

  function reducer(state, action) {
    switch (action.type) {
      case "broadcast":
        return {
          ...state,
          isBroadcast: true
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
    console.log(tx, "transaction toast");
    if (tx.isBroadcast && !state.isBroadcast) {
      dispatch({ type: "broadcast" });
      ToastContainer.show({
        message: "Transaction Broadcast",
        intent: Intent.PRIMARY
      });
    }
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
    if (tx.isRejected && !state.isRejected) {
      dispatch({ type: "rejected" });
      ToastContainer.show({
        message: "Request Denied",
        intent: Intent.WARNING
      });
    }
  }, [tx]);

  return {
    reset
  };
};
