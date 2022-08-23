import React from "react";
import { useFormData } from "../utils/contextProvider";

const Form = () => {
  const { formData, setFormData } = useFormData();
  return (
    <div className="flex py-8">
      <form
        className="w-full"
        onSubmit={(e) => {
          e.preventDefault();
          setFormData((prev) => ({ ...prev, submitted: true }));
        }}
      >
        <div className="my-6">
          <label htmlFor="amount" className="text-gray-800 mb-4">
            Add your income
          </label>
          <input
            type="number"
            required
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                amount: parseFloat(e.target.value),
              }));
            }}
            className="mt-1
            w-full
            rounded-md
            border-gray-300
            shadow-sm
            focus:ring-2 focus:ring-teal-600/40 focus:border-none"
          />
        </div>
        <div className="my-6">
          <label htmlFor="frequency" className="text-gray-800">
            What is frequency of your income?
          </label>
          <select
            name="frequency"
            required
            value={formData.frequency}
            id="frequency"
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, frequency: e.target.value }));
            }}
            className="
                    block
                    w-full
                    mt-1
                    rounded-md
                    border-gray-300
                    shadow-sm
                    cursor-pointer
                    focus:ring-2 focus:ring-teal-600/40
                    focus:border-none
                  "
          >
            <option value="">Please select</option>
            <option value="monthly">Monthly</option>
            <option value="annually">Annually</option>
          </select>
        </div>
        <div className="my-6 w-full">
          <div className="mb-2">What is the type of your income?</div>
          <div className="flex flex-col md:flex-row">
            <span className="md:mr-4 mb-2 md:mb-0 flex-1">
              <input
                type="radio"
                checked={formData.type === "net"}
                id="net"
                name="type"
                value="net"
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, type: e.target.value }));
                }}
                className="hidden peer"
              />
              <label
                htmlFor="net"
                className="inline-flex w-full justify-between items-center px-4 py-2 text-gray-500 bg-white rounded-xl border border-teal-600/60 cursor-pointer peer-checked:bg-teal-600/40 peer-checked:text-gray-800 hover:text-gray-600 hover:bg-gray-100"
              >
                <div className="text-gray-800 w-full flex justify-center">
                  Net income
                </div>
              </label>
            </span>
            <span className="flex-1">
              <input
                type="radio"
                checked={formData.type === "gross"}
                id="gross"
                name="type"
                value="gross"
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, type: e.target.value }));
                }}
                className="hidden peer"
              />
              <label
                htmlFor="gross"
                className="inline-flex justify-between w-full items-center px-4 py-2 text-gray-500 bg-white rounded-xl border border-teal-600/60 cursor-pointer peer-checked:bg-teal-600/40 peer-checked:text-gray-800 hover:text-gray-600 hover:bg-gray-100"
              >
                <div className="text-gray-800 w-full flex justify-center">
                  Gross income
                </div>
              </label>
            </span>
          </div>
        </div>
        <button
          type="submit"
          className="py-2 text-white bg-teal-600/60 w-full font-semibold rounded-xl border border-teal-600/60 hover:bg-teal-600/80 cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
