/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Select from "react-tailwindcss-select";

const FormSelect = ({
  value,
  onInputChange,
  name,
  label,
  options,
  isMultiple = false,
}) => {
  return (
    <div className="mb-2">
      <label
        htmlFor="password"
        className="block text-sm font-semibold text-gray-800 dark:text-white "
      >
        {label}
      </label>
      <Select
        className="w-auto p-1 rounded-md"
        value={value}
        onChange={(value) => onInputChange({ value, name })}
        options={options}
        isMultiple={isMultiple}
      />
    </div>
  );
};

export default FormSelect;
