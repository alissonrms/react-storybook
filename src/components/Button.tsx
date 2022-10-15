import { ButtonHTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Button({
  children,
  asChild,
  className,
  ...restProps
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        "py-3 px-4 rounded font-semibold text-black bg-cyan-500 hover:bg-cyan-300 cursor-pointer text-sm w-full block text-center transition-colors focus:ring-2 ring-white",
        className
      )}
      {...restProps}
    >
      {children}
    </Comp>
  );
}
