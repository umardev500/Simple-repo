import Image from "next/image";

export const Profile = () => {
  return (
    <div className="flex lg:flex-col items-center">
      <Image
        className="hidden lg:block"
        src={"/assets/images/profile.png"}
        width={160}
        height={160}
        alt="Profile photo"
      />
      <Image
        className="lg:hidden"
        src={"/assets/images/profile.png"}
        width={80}
        height={80}
        alt="Profile photo"
      />
      <div className="ml-4 lg:ml-0">
        <h2 className="mt-2 text-2xl text-gray-800 font-bold">Pixel8labs</h2>
        <div className="text-gray-500 -mt-0.5">@pixel8Labs</div>
      </div>
    </div>
  );
};
