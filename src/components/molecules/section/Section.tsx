import { BadgeMd, Heading } from "@/components/atoms";

export const Section = () => {
  return (
    <div className="flex items-center gap-3 h-20">
      <Heading text="Repository" />
      <BadgeMd text="6" />
    </div>
  );
};
