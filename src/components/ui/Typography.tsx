import React from "react";
import { cn } from "../../lib/utils"; // Updated import path

interface TypographyProps {
  variant?:
    | "display"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body-lg"
    | "body"
    | "body-sm"
    | "caption"
    | "overline";
  component?: keyof JSX.IntrinsicElements;
  color?: "primary" | "secondary" | "muted" | "white" | "accent";
  className?: string;
  children: React.ReactNode;
}

const variantStyles = {
  display: "font-montserrat font-display text-display",
  h1: "font-montserrat font-h1 text-h1",
  h2: "font-montserrat font-h2 text-h2",
  h3: "font-montserrat font-h3 text-h3",
  h4: "font-montserrat font-h4 text-h4",
  h5: "font-montserrat font-h5 text-h5",
  h6: "font-montserrat font-h6 text-h6",
  "body-lg": "font-outfit text-body-lg",
  body: "font-outfit text-body",
  "body-sm": "font-outfit text-body-sm",
  caption: "font-outfit text-caption",
  overline: "font-outfit text-overline uppercase tracking-wider",
} as const;

const colorStyles = {
  primary: "text-[#2D1B69]", // Deep purple - for main headings
  secondary: "text-[#5D4A82]", // Lighter purple - for subheadings
  muted: "text-[#666666]", // Gray - for body text
  white: "text-white", // White - for dark backgrounds
  black: "text-black", // Black - for light backgrounds
  accent: "text-[#C4B5FD]", // Light purple - for accents
} as const;

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    {
      variant = "body",
      component,
      color = "primary",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const Component = (component ||
      getDefaultComponent(variant)) as keyof JSX.IntrinsicElements;

    return React.createElement(
      Component,
      {
        className: cn(variantStyles[variant], colorStyles[color], className),
        ref,
        ...props,
      },
      children
    );
  }
);

Typography.displayName = "Typography";

const getDefaultComponent = (
  variant: TypographyProps["variant"]
): keyof JSX.IntrinsicElements => {
  switch (variant) {
    case "display":
    case "h1":
      return "h1";
    case "h2":
      return "h2";
    case "h3":
      return "h3";
    case "h4":
      return "h4";
    case "h5":
      return "h5";
    case "h6":
      return "h6";
    default:
      return "p";
  }
};
