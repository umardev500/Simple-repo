import { LoginBtn, MenuBtn, XButton } from "@/components/atoms";
import { AppContext, type AppContextType } from "@/context/AppContext";
import { useLogout } from "@/hooks/logout";
import { Menu as HeadlessMenu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useContext, useState } from "react";

export const SliderMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ctx = useContext(AppContext) as AppContextType;
  const avatarUrl = ctx.userData?.avatar_url;
  const isLogin = ctx.userData?.login !== "octocat";

  const logout = useLogout();
  const handleLogout = () => {
    logout();
  };

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <HeadlessMenu as={"div"} className={"lg:hidden"}>
      <HeadlessMenu.Button className={" flex items-center"}>
        {!isOpen ? <MenuBtn isOpen={isOpen} /> : <XButton />}
      </HeadlessMenu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        afterEnter={handleClick}
        afterLeave={handleClick}
      >
        <HeadlessMenu.Items
          className={
            "absolute  mt-1 top-[77px] h-full  min-w-[240px] left-0 right-0 bg-white  pt-2 pb-1 flex flex-col"
          }
        >
          {isLogin ? (
            <>
              <HeadlessMenu.Item>
                <Link
                  href={"/"}
                  className="py-[10px] mb-4 whitespace-nowrap font-medium text-gray-600 text-sm"
                >
                  <div className="flex gap-3 items-center px-4">
                    <div className="w-10 h-10">
                      <Image
                        className="rounded-full"
                        src={`${avatarUrl ?? "/assets/images/avatar.png"}`}
                        width={40}
                        height={40}
                        alt="Avatar"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-600 font-semibold whitespace-nowrap">
                        {ctx.userData?.name} slider
                      </h3>
                      <p className="whitespace-nowrap text-xs font-normal text-gray-500">
                        {ctx.userData?.email}
                      </p>
                    </div>
                  </div>
                </Link>
              </HeadlessMenu.Item>
              <HeadlessMenu.Item>
                <Link
                  href={"/"}
                  className="px-4 py-[16px] font-medium text-gray-600 hover:text-gray-500 text-sm"
                >
                  View profile
                </Link>
              </HeadlessMenu.Item>
              <HeadlessMenu.Item>
                <button
                  onClick={handleLogout}
                  className="text-left px-4 py-[16px] font-medium text-gray-600 hover:text-gray-500 text-sm border-t"
                >
                  Log out
                </button>
              </HeadlessMenu.Item>
            </>
          ) : (
            <HeadlessMenu.Item as={"button"} className={"px-4"}>
              <LoginBtn className="w-full mt-4" />
            </HeadlessMenu.Item>
          )}
        </HeadlessMenu.Items>
      </Transition>
    </HeadlessMenu>
  );
};
