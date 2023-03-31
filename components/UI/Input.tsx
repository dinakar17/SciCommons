import { ChangeEvent, useState } from "react";

interface Props {
  label: string;
  placeholder: string;
  type: string;
  value: string;
  setValue?: (value: string) => void;
  validate?: (value: string) => string | undefined;
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  label,
  placeholder,
  type,
  value,
  setValue,
  validate,
  handleChange,
}: Props) => {
  const [touched, setTouched] = useState(false);

  const validateInput = () => {
    if (!validate) return; // If no validation function is provided, don't validate

    const error = validate(value);
    if (error && (touched || (value && !touched))) {
      // Display error if input is touched or submitted with invalid value
      return <p className="text-red-500 text-sm mt-1">{error}</p>;
    }
  };

  let handleInputChange = handleChange;

  if (!handleChange && setValue) {
    handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
      setTouched(true);
    };
  }

  return (
    <div className="mb-4">
      <label htmlFor={label} className="block text-gray-700 dark:text-white font-semibold mb-1">
        {label}
      </label>
      <input
        id={label}
        type={type}
        value={value}
        onChange={handleInputChange}
        onBlur={() => setTouched(true)} // Mark input as touched when it loses focus
        placeholder={placeholder}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none focus:ring-2 focus:shadow-outline transition-all ${
          validate
            ? validate(value) && touched
              ? "focus:ring-red-500 dark:focus:ring-red-500"
              : ""
            : ""
        } dark:bg-gray-700 dark:border-gray-700 dark:focus:ring-gray-500`}
      />
      {validateInput()}
    </div>
  );
};

const validateEmail = (email: string): string | undefined => {
  if (!email) {
    return "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    return "Email is invalid";
  }
};

const validateUsername = (username: string): string | undefined => {
  if (!username) {
    return "Username is required";
  } else if (username.length < 3) {
    return "Username must be at least 3 characters long";
  }
};

const validatePassword = (password: string): string | undefined => {
  if (!password) {
    return "Password is required";
  } else if (password.length < 8) {
    return "Password must be at least 8 characters long";
  } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(password)) {
    return "Password must contain at least one lowercase letter, one uppercase letter, and one number";
  }
};

const validateConfirmPassword = (
  confirmPassword: string,
  password: string
): string | undefined => {
  if (!confirmPassword) {
    return "Confirm password is required";
  } else if (confirmPassword !== password) {
    return "Passwords do not match";
  }
};

export {
  Input,
  validateEmail,
  validateUsername,
  validatePassword,
  validateConfirmPassword,
};
