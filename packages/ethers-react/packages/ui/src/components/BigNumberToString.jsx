/* --- Global --- */
import React, { useEffect, useState } from "react";
import { Span } from "@horizin/atoms";

/* ---  BigNumberToString : Component --- */
export const BigNumberToString = ({
  bigNumber,
  label,
  sx,
  sxLabel,
  ...props
}) => {
  const [number, setNumber] = useState(undefined);
  const [bigNumberPassed, setBigNumberPassed] = useState(bigNumber);

  useEffect(() => {
    setBigNumberPassed(bigNumber);
  }, [bigNumber]);

  useEffect(() => {
    if (bigNumberPassed) setNumber(bigNumberPassed.toString());
  }, [bigNumberPassed]);

  return !number ? null : (
    <Span sx={sx} {...props}>
      {label && <Atom.Span sx={sxLabel}>{label}</Atom.Span>}
      {number}
    </Span>
  );
};
