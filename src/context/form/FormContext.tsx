import { createContext } from "react";

import type { FormData, FormState } from "../../types/interface/form.interface";

interface FormContextType extends FormState {
  nextStep: () => void;
  previousStep: () => void;
  updateField: (field: keyof FormData, value: string) => void;
}

export const FormContext = createContext<FormContextType | undefined>(
  undefined,
);
