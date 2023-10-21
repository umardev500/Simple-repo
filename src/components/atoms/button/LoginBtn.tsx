import { Btn } from "./btn";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const LoginBtn = () => {
  return (
    <Btn
      className={`${inter.className} font-semibold text-white bg-custom-pink rounded-lg px-[18px] py-[10px]`}
    >
      Login with Github
    </Btn>
  );
};
