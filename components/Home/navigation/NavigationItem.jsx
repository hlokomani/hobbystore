'use client';

import React from "react";
import { twMerge } from "tailwind-merge";

export const NavigationItem = ({
  className,
  children,
  active = false,
  ...rest
}) => {
  return (
    <>
      <div
        {...rest}
        className={twMerge(
          `flex items-center gap-2 ps-5 hover:bg-indigo-50 py-1 hover:cursor-pointer ${
            active
              ? "border-r-2 border-orange-500 bg-indigo-50 hover:cursor-default"
              : ""
          }`,
          className
        )}
      >
        {children}
      </div>
    </>
  );
};

export default NavigationItem;
