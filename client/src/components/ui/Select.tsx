import React from "react";

interface SelectOption {
  label: string;
  value: string;
}
interface SelectProps extends React.InputHTMLAttributes<HTMLSelectElement> {
  label?: string;
  selectOptions: SelectOption[];
}

const Select: React.FC<SelectProps> = ({ label, selectOptions, ...props }) => {
  return (
    <div className="mb-6">
      {label && (
        <label className="text-gray-400 font-medium uppercase block mb-2">
          {label}
        </label>
      )}

      <select className="flex items-center w-full px-3 py-2 border border-gray-700 rounded-md text-gray-400 focus:border-amber-500 focus:outline-0 appearance-none" {...props}>
        <option>Select an options</option>
        {selectOptions?.map((option) => (
          <option value={option.value} key={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
