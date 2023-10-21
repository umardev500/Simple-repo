import React from "react";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export const Btn = ({ children, className }: Props) => {
  return <button className={className}>{children}</button>;
};
