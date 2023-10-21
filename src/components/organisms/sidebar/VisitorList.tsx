import { Visitor } from "@/components/molecules";
import { useState } from "react";

export const VisitorList = () => {
  const [data] = useState<string[]>([
    "/assets/images/avatar.png",
    "/assets/images/avatar-1.png",
    "/assets/images/avatar-2.png",
  ]);

  return (
    <div className="mt-10">
      <h3 className="text-gray-800 font-bold text-sm">Latest Visitor</h3>
      <div className="flex items-center gap-4 mt-2">
        {data.map((item, i) => (
          <Visitor key={i} url={item} />
        ))}
      </div>
    </div>
  );
};
