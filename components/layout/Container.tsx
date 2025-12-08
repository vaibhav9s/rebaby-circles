import React from "react";
import clsx from "clsx";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={clsx("w-full max-w-5xl mx-auto px-4", className)}>
      {children}
    </div>
  );
}
