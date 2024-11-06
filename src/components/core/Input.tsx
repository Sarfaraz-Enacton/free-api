"use client";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  placeholder?: string;
  id: string;
  className?: string;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: any;
  value?: any;
  passwordDescription?: boolean;
  required?: boolean;
}

const Input = ({
  type,
  placeholder,
  id,
  className,
  label,
  onChange,
  errorMessage,
  value,
  required = false,
  ...rest
}: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <div className="space-y-2">
      <div className="relative">
        <input
          className={twMerge(
            `peer w-full px-3 bg-slate-200 border border-transparent rounded-lg pt-5 pb-1.5 text-base outline-none placeholder:text-transparent focus:border-primary-background h-12 caret-slate-600 transition-ease`,
            className,
            type === "password" && "pr-9"
          )}
          type={type === "password" && isPasswordVisible ? "text" : type}
          placeholder={placeholder}
          name={id}
          id={id}
          value={value}
          onChange={onChange}
          {...rest}
        />
        <label
          htmlFor={id}
          className="absolute left-0 ml-3 translate-y-1.5 text-xs text-slate-950 duration-100 ease-linear peer-placeholder-shown:translate-y-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-900 peer-focus:ml-3 peer-focus:translate-y-1.5 peer-focus:px-1 peer-focus:text-xs"
        >
          {label}
          {required && "*"}
        </label>
        {type === "password" && (
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? (
              <EyeSlashIcon className="w-4 h-4 text-secondary-text" />
            ) : (
              <EyeIcon className="w-4 h-4 text-secondary-text" />
            )}
          </button>
        )}
      </div>
      {errorMessage !== undefined && (
        <p className="text-text-danger text-xs">{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
