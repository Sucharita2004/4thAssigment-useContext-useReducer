import type { FormData } from "../interface/form.interface";

export type FormAction =
  | { type: "NEXT_STEP" }
  | { type: "PREVIOUS_STEP" }
  | {
      type: "UPDATE_FIELD";
      payload: {
        field: keyof FormData;
        value: string;
      };
    };