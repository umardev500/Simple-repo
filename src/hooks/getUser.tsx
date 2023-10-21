import { AppContext, type AppContextType } from "@/context/AppContext";
import { type UserData } from "@/types";
import { useContext, useEffect } from "react";

export const useGetUser = () => {
  const ctx = useContext(AppContext) as AppContextType;

  useEffect(() => {
    fetch("http://localhost:8000/api/user")
      .then(async (res) => {
        return await res.json();
      })
      .then((data) => {
        const dataOfUser = data.data as UserData;
        ctx.setUserdata(dataOfUser);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
};
