import useFormData from "../../hooks/useFormData";

const steps = [
  "Personal Info",
  "Address",
  "Review",
];

const StepIndicator = () => {
  const { currentStep } = useFormData();

  return (
    <div className="mb-10 flex items-center justify-between">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = currentStep >= stepNumber;

        return (
          <div
            key={step}
            className="flex flex-1 items-center last:flex-none"
          >
            <div className="flex flex-col items-center gap-2">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full font-semibold transition-all ${
                  isActive
                    ? "bg-[#123B3A] text-[#A7F3D0]"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {stepNumber}
              </div>

              <span
                className={`whitespace-nowrap text-xs font-medium sm:text-sm ${
                  isActive
                    ? "text-[#123B3A]"
                    : "text-gray-400"
                }`}
              >
                {step}
              </span>
            </div>

            {index !== steps.length - 1 && (
              <div
                className={`mx-2 mb-6 h-1 flex-1 rounded-full ${
                  currentStep > stepNumber
                    ? "bg-[#123B3A]"
                    : "bg-gray-200"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StepIndicator;