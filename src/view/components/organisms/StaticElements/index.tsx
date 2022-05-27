import * as React from "react";

interface IProps {
  children?: React.ReactNode;
}

export const StaticElements: React.FC<IProps> = ({ children }) => {
  return (
    <>
      {children}
    </>
  )
}