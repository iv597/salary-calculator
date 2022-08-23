import React from "react";
import { useFormData } from "../utils/contextProvider";

const SalaryTable = () => {
  const { formData } = useFormData();

  let result = 0;
  let inputValue = formData.amount;

  let netInputValue = inputValue;
  if (formData.type === "gross") {
    netInputValue /= 1.2;
    result = netInputValue;
  } else {
    result = netInputValue * 1.2;
  }

  if (formData.frequency === "monthly") netInputValue *= 12;

  let tableValues = [
    {
      label: "Monthly",
      net: netInputValue / 12,
      tax: (netInputValue / 12) * 0.2,
      gross: (netInputValue / 12) * 1.2,
    },
    {
      label: "Anualy",
      net: netInputValue,
      tax: netInputValue * 0.2,
      gross: netInputValue * 1.2,
    },
  ];

  if (formData.submitted) {
    return (
      <div className="lg:px-8">
        <div className="bg-white rounded-xl text-gray-500 shadow-md p-4 mt-8 lg:mt-0 mb-6 flex-1">
          <span>
            {formData.type === "net"
              ? "Your gross income is:"
              : "Your net income is:"}
          </span>
          <span className="font-bold text-xl text-gray-600 ml-4">
            {result.toFixed(2)}
          </span>
        </div>
        <table className="table-fixed w-full">
          <thead className="text-gray-400 border-b-[2px]">
            <tr>
              <th className="text-left text-sm md:text-xl font-semibold py-4">
                Frequency
              </th>
              <th className="text-left text-sm md:text-xl font-semibold py-4">
                Net income
              </th>
              <th className="text-left text-sm md:text-xl font-semibold py-4">
                Tax
              </th>
              <th className="text-left text-sm md:text-xl font-semibold py-4">
                Gross income
              </th>
            </tr>
          </thead>
          <tbody>
            {tableValues.map((item, index) => (
              <tr key={index} className="border-b-[2px]">
                <td className="text-gray-600 py-4">{item.label}</td>
                <td className="text-gray-600 py-4">{item.net.toFixed(2)}</td>
                <td className="text-gray-600 py-4">{item.tax.toFixed(2)}</td>
                <td className="text-gray-600 py-4">{item.gross.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return <></>;
  }
};

export default SalaryTable;
