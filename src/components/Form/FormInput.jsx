/* eslint-disable react/prop-types */

const FormInput = ({ value, onInputChange, type, name, label }) => {
  return (
    <div className="mb-2">
      <label
        htmlFor="puntajeTestGorilla"
        className="block text-sm font-semibold text-gray-800 dark:text-white"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        className="block w-full px-4 py-2 mt-2  text-purple-700 dark:text-gray-700 bg-white border rounded-md focus:border-zinc-400 focus:ring-zinc-300 focus:outline-none focus:ring focus:ring-opacity-40"
        value={value}
        onChange={onInputChange}
      />
    </div>
  );
};

export default FormInput;
