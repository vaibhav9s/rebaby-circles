import React from "react";
import clsx from "clsx";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div className={clsx("rounded-xl bg-white shadow-sm p-4", className)}>
      {children}
    </div>
  );
}