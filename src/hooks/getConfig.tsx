import { AppContext, type AppContextType } from "@/context/AppContext";
import { useContext, useEffect, useState } from "react";

export const useGetConfig = () => {
  const [config, setConfig] = useState<any>({});
  const ctx = useContext(AppContext) as AppContextType;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token !== null) {
      setConfig({
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
  }, [ctx.userData]);

  return config;
};
