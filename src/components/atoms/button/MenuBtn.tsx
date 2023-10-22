import { AppContext, type AppContextType } from "@/context/AppContext";
import Image from "next/image";
import { useContext } from "react";
import { Bars } from "..";

export const MenuBtn = ({ isOpen }: { isOpen: boolean }) => {
  const ctx = useContext(AppContext) as AppContextType;
  const avatarUrl = ctx.userData?.avatar_url;
  const isLogin = ctx.userData?.login !== "octocat";

  return (
    <>
      {isLogin ? (
        <div className="flex hover:cursor-pointer hover:bg-gray-50 items-center px-4 py-2 gap-4 border rounded-full">
          <Image
            className="rounded-full"
            src={`${avatarUrl ?? "/assets/images/avatar.png"}`}
            width={40}
            height={40}
            alt="Avatar"
          />
          <span className="text-gray-800 hover:text-gray-500">
            <Bars />
          </span>
        </div>
      ) : (
        <Bars />
      )}
    </>
  );
};
