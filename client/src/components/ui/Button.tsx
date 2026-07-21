import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger" | "white";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  label?: string;
  onClick: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  size = "md",
  loading,
  disabled,
  icon,
  fullWidth,
  className,
}) => {
  const base = `flex flex-row items-center justify-center font-semibold cursor-pointer`;
  const variants: Record<ButtonVariant, string> = {
    primary: "bg-amber-500 text-gray-900 active:bg-amber-600",
    secondary: "bg-gray-900  active:bg-gray-800",
    outline: "border border-amber-500 bg-transparent active:bg-indigo-500/10",
    ghost: "bg-transparent active:bg-slate-700",
    danger: "bg-red-500 active:bg-red-600",
    white: "bg-white text-amber-500"
  };
  const sizes: Record<ButtonSize, string> = {
    sm: "px-2 py-1.5 gap-1 rounded-lg",
    md: "px-4 py-3 gap-2 rounded-xl",
    lg: "px-6 py-4 gap-2 rounded-xl",
  };
  const textSizes: Record<ButtonSize, string> = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };
  const textColors: Record<ButtonVariant, string> = {
    primary: "text-gray-800",
    secondary: "text-white",
    outline: "text-indigo-400",
    ghost: "text-indigo-400",
    danger: "text-white",
    white: "text-amber-500",
  };
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`${base} ${variants[variant]} ${sizes[size]} ${fullWidth ? "w-full" : ""} ${disabled ? "opacity-50" : ""} ${textSizes[size]} ${textColors[variant]} ${className || ""} `}
    >
      {icon && <span className="me-2">{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
