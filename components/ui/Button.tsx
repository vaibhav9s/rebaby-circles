"use client";

import React from "react";
import clsx from "clsx";

export default function Button({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={clsx(
        "rounded-full bg-pink-500 px-6 py-3 text-black font-medium hover:bg-pink-600 transition",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
