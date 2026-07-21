import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  leftIcon,
  rightIcon,
  ...props
}) => {
  return (
    <div className="mb-6">
      {label && (
        <label className="text-sm text-gray-400 font-medium uppercase block mb-2">
          {label}
        </label>
      )}

      <div
        className={`flex items-center px-3 py-2 border border-gray-700 rounded-md text-gray-400 focus-within:border-amber-500`}
      >
        {leftIcon && <span className="me-2">{leftIcon}</span>}
        <input
          type={type}
          {...props}
          className="w-full h-full focus:outline-0"
        />
        {rightIcon && <span className="ms-2">{rightIcon}</span>}
      </div>
    </div>
  );
};

export default Input;
