export const useLogout = () => {
  const doLogout = async () => {
    const token = localStorage.getItem("token");

    try {
      await fetch("http://localhost:8000/api/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
      });
      localStorage.removeItem("token");
      window.location.href = "/";
    } catch (error: any) {
      throw new Error("Logout error" + error.message);
    }
  };

  return doLogout;
};
