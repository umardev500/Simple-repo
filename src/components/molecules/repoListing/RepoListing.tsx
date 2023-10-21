import { BadgeSm } from "@/components/atoms";
import { Dot } from "@/components/atoms/badge/Dot";
import { type Repo } from "@/types";
import Link from "next/link";

export const RepoListing = ({ title, desc }: Repo) => {
  return (
    <Link href={"/repo"}>
      <div className="bg-gray-25 border p-6 rounded-lg mb-6">
        <div className="mb-2 flex items-center gap-3 flex-wrap">
          <h3 className="font-bold text-gray-800">{title}</h3>
          <BadgeSm
            text="public"
            className="bg-indigo-50 text-indigo-700 font-medium"
          />
        </div>
        {/* Description */}
        <p className="text-gray-800 text-sm">{desc}</p>

        {/* Repo info */}
        <div className="mt-6 flex items-center gap-6 text-xs">
          <div className="flex items-center gap-1">
            <Dot className="bg-sky-700 mb-[1.2px]" />
            <span className="text-gray-800">Javascript</span>
          </div>
          <div className="text-gray-500">updated on Auf 25</div>
        </div>
      </div>
    </Link>
  );
};
