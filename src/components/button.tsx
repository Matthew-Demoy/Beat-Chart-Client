import React from "react";
interface buttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isEnabled: boolean;
  isPrimary: boolean;
  onClick: any;
}

const Button = ({
  isEnabled = true,
  children,
  isPrimary = true,
  onClick,
  className,
  ...props
}: buttonProps) => {
  if (isPrimary) {
    if (isEnabled) {
      return (
        <button
          {...props}
          className={
            "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " +
            className
          }
          onClick={onClick}
        >
          {children}
        </button>
      );
    } else {
      return (
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed ">
          {children}
        </button>
      );
    }
  } else {
    return (
      <button
        onClick={onClick}
        className={
          "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded " +
          className
        }
      >
        {children}
      </button>
    );
  }
};
export default Button;
