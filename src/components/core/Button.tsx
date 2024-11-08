"use client";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  label?: string;
  variant?: any;
  icon?: React.ReactNode;
  role?: "button" | "link";
  url?: any;
  className?: string;
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  size?: "lg" | "md" | "sm" | "xs";
  fullWidth?: boolean;
  target?: "_self" | "_blank" | "_parent" | "_top" | any;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  label,
  variant,
  icon,
  role,
  url,
  className,
  loading,
  onClick,
  fullWidth = false,
  size = "md",
  target = "_self",
  disabled = false,
  type,
  ...rest
}: ButtonProps) {
  const baseStyle =
    "inline-flex justify-center items-center gap-2.5 text-white font-medium rounded-lg transition-ease";
  const style: any = {
    primary:
      "bg-slate-800 text-white hover:opacity-90 disabled:opacity-70 transition-ease",
    secondary:
      "bg-tertiary-background text-secondary-text border border-secondary-background hover:border-primary-background transition-all ease-in-out duration-300",
    tertiary:
      "group bg-tertiary-background text-primary [&>svg]:text-secondary-text hover:bg-secondary-background hover:text-secondary-text disabled:!text-primary-text/25 [&>svg]:group-disabled:!text-primary-text/25",
    transparent: "bg-transparent text-secondary-text hover:text-primary-text",
    white: "bg-white !text-blue-950 w-fit",
    blue: "bg-blue-400",
  };
  const sizes: any = {
    lg: "px-4 py-3.5 text-sm",
    md: "px-4 py-2.5 text-sm",
    sm: "px-3 py-2 text-xs",
    xs: "p-2 text-xs",
  };

  return (
    <>
      {role === "button" ? (
        <button
          type={type || "button"}
          onClick={onClick}
          className={twMerge(
            baseStyle,
            sizes[size],
            style[variant],
            className,
            fullWidth && "w-full"
          )}
          disabled={loading || disabled}
          {...rest}
        >
          {loading ? (
            <>
              <svg
                className="shrink-0 animate-spin  h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </>
          ) : null}
          {icon ? icon : null}
          {label ? label : null}
        </button>
      ) : (
        <Link
          prefetch={true}
          onClick={onClick}
          href={url || "/"}
          className={twMerge(
            baseStyle,
            style[variant],
            sizes[size],
            className,
            fullWidth && "w-full"
          )}
          target={target || "_self"}
          {...rest}
        >
          {icon ? icon : null}
          {label ? label : null}
        </Link>
      )}
    </>
  );
}
