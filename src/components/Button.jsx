const Button = ({ children, className = "", type = "button", onClick, ...props }) => {
  return (
    <button 
      type={type} 
      className={`transition-all ${className}`} 
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
