import React from "react";

const Button = ({ className, onClick, type = "button", bgColor = "primary", children }) => {
  let bgClassName = 'bg-primary';
  switch(bgColor) {
    case "primary": 
      bgClassName = "bg-primary"
      break;
    case "secondary":
      bgClassName = "bg-secondary"
      break;
    default:
      break;
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-3 px-6 rounded-lg bg-primary mt-auto ${bgClassName} ${className}`}
      
    >
      {children}
    </button>
  );
};

export default Button;
