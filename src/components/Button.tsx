import { ReactNode } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        "py-4 px-3 rounded font-semibold text-black bg-cyan-500 hover:bg-cyan-300 cursor-pointer text-sm w-full block text-center transition-colors focus:ring-2 ring-white"
      )}
    >
      {children}
    </Comp>
  );
}
