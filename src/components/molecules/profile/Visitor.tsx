import { type Follower } from "@/types";
import Image from "next/image";

interface Props {
  item?: Follower;
}

export const Visitor = ({ item }: Props) => {
  return (
    <Image
      className="rounded-full"
      src={item?.avatar_url ?? "/"}
      width={56}
      height={56}
      alt="Avatar"
    />
  );
};
