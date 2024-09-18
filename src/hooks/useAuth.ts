import { useState, useEffect } from "react";

function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      // Example: fetch user from API
      const response = await fetch("/api/auth/user");
      const userData = await response.json();
      setUser(userData);
    };

    fetchUser();
  }, []);

  const login = async (credentials: any) => {
    // Example: login logic
    const response = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    });
    const userData = await response.json();
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return { user, login, logout };
}

export default useAuth;
