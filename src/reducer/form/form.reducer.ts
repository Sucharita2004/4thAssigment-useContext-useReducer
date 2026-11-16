import type { FormState } from "../../types/interface/form.interface";
import type { FormAction } from "../../types/type/form.type";


export const formInitialValue: FormState = {
  currentStep: 1,

  formData: {
    fullName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
  },
};

export const formReducer = (
  state = formInitialValue,
  action: FormAction
): FormState => {
  switch (action.type) {
    case "NEXT_STEP":
      return {
        ...state,
        currentStep:
          state.currentStep < 3
            ? state.currentStep + 1
            : state.currentStep,
      };

    case "PREVIOUS_STEP":
      return {
        ...state,
        currentStep:
          state.currentStep > 1
            ? state.currentStep - 1
            : state.currentStep,
      };

    case "UPDATE_FIELD":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.field]: action.payload.value,
        },
      };

    default:
      return state;
  }
};