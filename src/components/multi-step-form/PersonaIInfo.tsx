import useFormData from "../../hooks/useFormData";

const PersonalInfo = () => {
  const { formData, updateField, nextStep } = useFormData();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <h2 className="text-2xl font-bold text-[#123B3A]">
          Personal Information
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Please enter your personal details.
        </p>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Full Name
        </label>

        <input
          type="text"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={(e) =>
            updateField("fullName", e.target.value)
          }
          required
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#123B3A] focus:ring-2 focus:ring-[#123B3A]/20"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Email Address
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) =>
            updateField("email", e.target.value)
          }
          required
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#123B3A] focus:ring-2 focus:ring-[#123B3A]/20"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Phone Number
        </label>

        <input
          type="tel"
          placeholder="Enter 10 digit phone number"
          value={formData.phone}
          onChange={(e) =>
            updateField("phone", e.target.value)
          }
          pattern="[0-9]{10}"
          title="Please enter a valid 10 digit phone number"
          required
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#123B3A] focus:ring-2 focus:ring-[#123B3A]/20"
        />
      </div>

      <div className="flex justify-end pt-3">
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

export default PersonalInfo;