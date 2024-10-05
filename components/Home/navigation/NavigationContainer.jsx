'use client';

import React from "react";
import { twMerge } from "tailwind-merge";

export const NavigationContainer = ({
  className,
  ...rest
}) => {
  return (
    <>
      <div {...rest} className={twMerge("", className)}></div>
    </>
  );
};

export default NavigationContainer;
