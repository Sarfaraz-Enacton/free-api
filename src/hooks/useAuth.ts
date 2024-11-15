import { getUser } from "@/api/auth";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    const checkUser = async () => {
      const { data, success } = await getUser();
      console.log(data, success);
      setData(data);
      if (success) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };
    checkUser();
  }, []);
  return { isLoggedIn, data };
};

export default useAuth;
