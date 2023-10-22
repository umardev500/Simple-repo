import { AppContext, type AppContextType } from "@/context/AppContext";
import { type Follower } from "@/types";
import { useContext, useEffect } from "react";
import { useGetConfig } from "./getConfig";

export const useGetFollower = () => {
  const ctx = useContext(AppContext) as AppContextType;
  const config = useGetConfig();

  useEffect(() => {
    if (ctx.userData !== undefined) {
      fetch(ctx.userData.followers_url, config)
        .then(async (res) => {
          return await res.json();
        })
        .then((data: Follower[]) => {
          ctx.setFollower(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [ctx.userData]);
};
