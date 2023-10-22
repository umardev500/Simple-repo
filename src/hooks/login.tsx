export const useLogin = () => {
  const url = `${process.env.url}/login`;
  const doLogin = async () => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
      });
      const jsonData = await response.json();
      window.location.href = jsonData.data;
    } catch (error: any) {
      throw new Error("Login error" + error.message);
    }
  };

  return doLogin;
};
