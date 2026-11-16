import StepIndicator from "../../components/multi-step-form/StepIndicator";

import AddressInfo from "../../components/multi-step-form/AddressInfo";
import ReviewInfo from "../../components/multi-step-form/ReviewInfo";

import useFormData from "../../hooks/useFormData";
import PersonalInfo from "./PersonaIInfo";

const MultiStepForm = () => {
  const { currentStep } = useFormData();

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-[#123B3A] sm:text-4xl">
            Multi-Step Form
          </h1>

          <p className="mt-2 text-gray-500">
            Complete each step to submit your information.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-lg sm:p-8">
          <StepIndicator />

          {currentStep === 1 && <PersonalInfo />}

          {currentStep === 2 && <AddressInfo />}

          {currentStep === 3 && <ReviewInfo />}
        </div>

        <p className="mt-5 text-center text-sm text-gray-400">
          Step {currentStep} of 3
        </p>
      </div>
    </div>
  );
};

export default MultiStepForm;