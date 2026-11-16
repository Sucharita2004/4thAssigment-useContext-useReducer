import { useReducer } from "react";
import type { ReactNode } from "react";

import { FormContext } from "./FormContext";

import type { FormData } from "../../types/interface/form.interface";
import { formInitialValue, formReducer } from "../../reducer/form/form.reducer";

const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formState, dispatch] = useReducer(formReducer, formInitialValue);

  const nextStep = () => {
    dispatch({ type: "NEXT_STEP" });
  };

  const previousStep = () => {
    dispatch({ type: "PREVIOUS_STEP" });
  };

  const updateField = (field: keyof FormData, value: string) => {
    dispatch({
      type: "UPDATE_FIELD",
      payload: { field, value },
    });
  };

  return (
    <FormContext value={{ ...formState, nextStep, previousStep, updateField }}>
      {children}
    </FormContext>
  );
};

export default FormProvider;
