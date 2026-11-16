import useFormData from "../../hooks/useFormData";

const ReviewInfo = () => {
  const { formData, previousStep } = useFormData();

  const handleSubmit = () => {
    console.log("Submitted Form Data:", formData);

    alert("Your form has been submitted successfully!");
  };

  const personalDetails = [
    { label: "Full Name", value: formData.fullName },
    { label: "Email Address", value: formData.email },
    { label: "Phone Number", value: formData.phone },
  ];

  const addressDetails = [
    { label: "Street Address", value: formData.street },
    { label: "City", value: formData.city },
    { label: "State", value: formData.state },
    { label: "PIN Code", value: formData.pincode },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-[#123B3A]">
          Review Your Information
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Please check your details before submitting.
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 p-5">
        <h3 className="mb-4 font-bold text-[#123B3A]">
          Personal Information
        </h3>

        <div className="space-y-3">
          {personalDetails.map((item) => (
            <div
              key={item.label}
              className="flex flex-col justify-between gap-1 sm:flex-row"
            >
              <span className="text-sm text-gray-500">
                {item.label}
              </span>

              <span className="break-all text-sm font-semibold text-gray-800">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 p-5">
        <h3 className="mb-4 font-bold text-[#123B3A]">
          Address Information
        </h3>

        <div className="space-y-3">
          {addressDetails.map((item) => (
            <div
              key={item.label}
              className="flex flex-col justify-between gap-1 sm:flex-row"
            >
              <span className="text-sm text-gray-500">
                {item.label}
              </span>

              <span className="break-all text-sm font-semibold text-gray-800">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-between gap-3 pt-3 sm:flex-row">
        <button
          type="button"
          onClick={previousStep}
          className="rounded-xl border border-[#123B3A] px-6 py-3 font-semibold text-[#123B3A] transition hover:bg-gray-100"
        >
          ← Previous
        </button>

        <button
          type="button"
          onClick={handleSubmit}
          className="rounded-xl bg-[#123B3A] px-8 py-3 font-semibold text-[#A7F3D0] transition hover:bg-[#1B5552]"
        >
          Submit Form
        </button>
      </div>
    </div>
  );
};

export default ReviewInfo;