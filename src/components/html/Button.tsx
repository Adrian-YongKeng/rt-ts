import React from "react";

type ButtonProps = {
  variant: "primary" | "secondary";
  children: string; // expect children to be a string
  // } & React.ComponentProps<"button">;
} & Omit<React.ComponentProps<"button">, "children">;

// TypeScript might allow children to be of type React.ReactNode (from React.ComponentProps<"button">), which is broader than string. This could lead to type mismatches or unexpected behavior, as the component expects children to be a string.
// Omit is used to exclude the children prop from React.ComponentProps<'button'>
// This allows the ButtonProps type to define its own children prop with a more specific type (string)
// It ensure type safety and prevent conflicts between the explicity defined children and the one inherited from the HTML button props

const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  );
};

export default CustomButton;
