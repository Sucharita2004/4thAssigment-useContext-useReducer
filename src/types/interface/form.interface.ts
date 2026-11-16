export interface FormData {
  fullName: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
}

export interface FormState {
  currentStep: number;
  formData: FormData;
}