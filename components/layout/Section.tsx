import { ReactNode, HTMLAttributes } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLElement>;

export default function Section({
  children,
  className = "",
  ...props
}: SectionProps) {
  return (
    <section className={`py-16 ${className}`} {...props}>
      {children}
    </section>
  );
}
