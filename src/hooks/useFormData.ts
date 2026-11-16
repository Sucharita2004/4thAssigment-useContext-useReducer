import { useContext } from "react";

import { FormContext } from "../context/form/FormContext";

const useFormData = () => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error(
      "useFormData must be used inside FormProvider"
    );
  }

  return context;
};

export default useFormData;