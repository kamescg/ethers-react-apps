/* --- Global --- */
import { useEffect, useReducer } from "react";
import { ToastContainer, Intent } from "@horizin/blueprint-system";

/* --- useReadToast : Effect --- */
export const useReadToast = tx => {
  /* ------------------- */
  // Reducer & State
  /* ------------------- */
  const initialState = {
    isRead: false,
    isReadError: false,
    isRejected: false,
    msg: undefined,
    msgErr: undefined
  };

  function reducer(state, action) {
    switch (action.type) {
      case "IS_READ":
        return {
          ...state,
          isRead: true
        };
      case "IS_READ_ERROR":
        return {
          ...state,
          isReadError: true
        };
      case "SET_MESSAGE":
        return {
          ...state,
          msg: action.payload
        };
      case "SET_MESSAGE_ERROR":
        return {
          ...state,
          msgErr: action.payload
        };
      case "reset":
        return {
          ...state,
          isRead: false,
          isReadError: false,
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
  const setMsg = msg => {
    dispatch({ type: "SET_MESSAGE", payload: msg });
  };
  const setMsgErr = msg => {
    dispatch({ type: "SET_MESSAGE_ERROR", payload: msg });
  };

  /* ------------------- */
  // Effects
  /* ------------------- */
  /* --- Toast Show : Effect --- */
  useEffect(() => {
    if (tx.isRead && !state.isRead) {
      dispatch({ type: "IS_READ" });
      ToastContainer.show({
        message: state.msg,
        intent: Intent.PRIMARY
      });
    }
    if (tx.isRejected && !state.isReadError) {
      dispatch({ type: "IS_READ_ERROR" });
      ToastContainer.show({
        message: state.msgErr,
        intent: Intent.WARNING
      });
    }
  }, [state.msg]);

  return {
    reset,
    setMsg,
    setMsgErr
  };
};
