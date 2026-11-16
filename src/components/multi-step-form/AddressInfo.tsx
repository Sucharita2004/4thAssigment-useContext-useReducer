import useFormData from "../../hooks/useFormData";

const AddressInfo = () => {
  const {
    formData,
    updateField,
    nextStep,
    previousStep,
  } = useFormData();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <h2 className="text-2xl font-bold text-[#123B3A]">
          Address Information
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Please provide your complete address.
        </p>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Street Address
        </label>

        <input
          type="text"
          placeholder="Enter your street address"
          value={formData.street}
          onChange={(e) =>
            updateField("street", e.target.value)
          }
          required
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#123B3A] focus:ring-2 focus:ring-[#123B3A]/20"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          City
        </label>

        <input
          type="text"
          placeholder="Enter your city"
          value={formData.city}
          onChange={(e) =>
            updateField("city", e.target.value)
          }
          required
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#123B3A] focus:ring-2 focus:ring-[#123B3A]/20"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          State
        </label>

        <input
          type="text"
          placeholder="Enter your state"
          value={formData.state}
          onChange={(e) =>
            updateField("state", e.target.value)
          }
          required
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#123B3A] focus:ring-2 focus:ring-[#123B3A]/20"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          PIN Code
        </label>

        <input
          type="text"
          placeholder="Enter 6 digit PIN code"
          value={formData.pincode}
          onChange={(e) =>
            updateField("pincode", e.target.value)
          }
          pattern="[0-9]{6}"
          title="Please enter a valid 6 digit PIN code"
          required
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#123B3A] focus:ring-2 focus:ring-[#123B3A]/20"
        />
      </div>

      <div className="flex justify-between gap-3 pt-3">
        <button
          type="button"
          onClick={previousStep}
          className="rounded-xl border border-[#123B3A] px-6 py-3 font-semibold text-[#123B3A] transition hover:bg-gray-100"
        >
           Previous
        </button>

        <button
          type="submit"
          className="rounded-xl bg-[#123B3A] px-8 py-3 font-semibold text-[#A7F3D0] transition hover:bg-[#1B5552]"
        >
          Next Step 
        </button>
      </div>
    </form>
  );
};

export default AddressInfo;