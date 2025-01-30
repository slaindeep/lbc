import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "cta" | "cta-light";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
  hideArrow?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  hideArrow = false,
}) => {
  const buttonSpecificClass = "modern-gradient-button";

  const baseStyles = [
    buttonSpecificClass,
    "inline-flex",
    "items-center",
    "justify-center",
    "font-semibold",
    "transition-all",
    "duration-300",
    "relative",
    "overflow-hidden",
    "group",
  ].join(" ");

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantStyles = {
    cta: [
      "rounded-full",
      "bg-gradient-to-r",
      "from-[#5D4A82]",
      "via-[#856BAE]",
      "to-[#5D4A82]",
      "text-white",
      "font-medium",
      "shadow-[0_0_15px_rgba(93,74,130,0.3)]",
      "hover:shadow-[0_0_20px_rgba(93,74,130,0.5)]",
      "group",
      "relative",
      "bg-[length:200%_100%]",
      "border-3",
      "border-white/90",
      "backdrop-blur-sm",
      "hover:scale-105",
      "hover:-translate-y-0.5",
    ].join(" "),

    "cta-light": [
      "rounded-full",
      "bg-[#5D4A82]",
      "text-white",
      "font-medium",
      "shadow-lg",
      "group",
      "transition-all",
      "duration-300",
      "hover:bg-[#856BAE]",
      "hover:shadow-purple-500/30",
      "hover:scale-105",
      "hover:-translate-y-0.5",
    ].join(" "),

    primary: [
      "rounded-2xl",
      "bg-gradient-to-r",
      "from-[#5D4A82]",
      "via-[#755A9F]",
      "to-[#856BAE]",
      "text-white",
      "shadow-lg",
      "transition-all",
      "duration-300",
      "hover:shadow-xl",
      "hover:scale-105",
      "hover:-translate-y-0.5",
      "hover:bg-gradient-to-r",
      "hover:from-[#856BAE]",
      "hover:via-[#755A9F]",
      "hover:to-[#5D4A82]",
    ].join(" "),

    secondary: [
      "rounded-2xl",
      "bg-gradient-to-r",
      "from-[#856BAE]",
      "via-[#9B8DC7]",
      "to-[#B4A8E0]",
      "text-white",
      "shadow-lg",
      "transition-all",
      "duration-300",
      "hover:shadow-xl",
      "hover:scale-105",
      "hover:-translate-y-0.5",
      "hover:bg-gradient-to-r",
      "hover:from-[#B4A8E0]",
      "hover:via-[#9B8DC7]",
      "hover:to-[#856BAE]",
    ].join(" "),

    outline: [
      "rounded-2xl",
      "border-2",
      "border-[#5D4A82]",
      "text-[#5D4A82]",
      "transition-all",
      "duration-300",
      "hover:text-white",
      "hover:border-transparent",
      "hover:scale-105",
      "hover:-translate-y-0.5",
      "hover:bg-gradient-to-r",
      "hover:from-[#5D4A82]",
      "hover:via-[#755A9F]",
      "hover:to-[#856BAE]",
    ].join(" "),
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${baseStyles}
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${className}
      `}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {!hideArrow && (variant === 'cta' || variant === 'cta-light') && (
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        )}
      </span>
    </button>
  );
};

export default Button;