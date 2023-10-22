import { AppContext, type AppContextType } from "@/context/AppContext";
import { getConfig } from "@/helper/getConfig";
import { type UserData } from "@/types";
import { useContext, useEffect } from "react";

export const useGetUser = () => {
  const ctx = useContext(AppContext) as AppContextType;

  useEffect(() => {
    const config = getConfig();
    fetch("http://localhost:8000/api/user", config)
      .then(async (res) => {
        return await res.json();
      })
      .then((data) => {
        const dataOfUser = data.data as UserData;
        console.log(dataOfUser);
        ctx.setUserdata(dataOfUser);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
};
