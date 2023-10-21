import { AppContext, type AppContextType } from "@/context/AppContext";
import { type Repository } from "@/types";
import { useContext, useEffect } from "react";

export const useGetRepo = () => {
  const ctx = useContext(AppContext) as AppContextType;

  useEffect(() => {
    fetch("http://localhost:8000/api/repo")
      .then(async (res) => {
        return await res.json();
      })
      .then((data) => {
        const dataOfUser = data.data as Repository[];
        ctx.setRepos(dataOfUser);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
};
