import React, { useState } from "react";

interface TextAreaProps {
  label: string;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  validate?: (value: string) => string | undefined;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  placeholder,
  value,
  setValue,
  validate,
}) => {
  const [error, setError] = useState<string | undefined>(undefined);

  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);

    if (validate) {
      const errorMessage = validate(event.target.value);
      setError(errorMessage);
    }
  };

  return (
    <div className="mb-4">
      <label className="block font-bold mb-2">{label}</label>
      <textarea
        className={`w-full border shadow appearance-none rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:shadow-outline transition-all${
          error ? "focus:ring-red-500" : ""
        } rounded dark:bg-gray-700 dark:border-gray-700 dark:focus:ring-gray-500 dark:text-white`}
        placeholder={placeholder}
        value={value}
        rows={4}
        onChange={handleOnChange}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

const validateBio = (value: string) => {
  if (value.trim().length < 10) {
    return "Bio should be at least 10 characters long";
  }
  return undefined;
};

const validateDescription = (value: string) => {
  if (value.trim().length < 20) {
    return "Description should be at least 20 characters long";
  }
  return undefined;
};

export { TextArea, validateBio, validateDescription};
