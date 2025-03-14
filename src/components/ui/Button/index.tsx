import React from "react";

type Proptypes = {
  type: "submit" | "reset" | "button" | undefined;
  children: React.ReactNode;
  onClick?: () => void;
  classname?: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
};

const Button = (props: Proptypes) => {
  const {
    type,
    children,
    variant = "primary",
    onClick,
    classname,
    disabled,
  } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      className={`font-semibold rounded p-2 px-3 cursor-pointer text-sm lg:text-md flex gap-2 justify-center items-center 
  ${
    variant === "primary"
      ? "bg-indigo-700 text-white hover:bg-indigo-900 transition-all ease-in-out duration-100 p-2"
      : "bg-white text-indigo-800 hover:bg-gray-200 transition-all ease-in-out duration-100 p-2"
  } 
  ${classname} 
  ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
