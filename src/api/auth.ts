export const login = async (username: string, password: string) => {
  const response = await fetch("https://api.freeapi.app/api/v1/users/login", {
    method: "POST",
    headers: { accept: "application/json", "content-type": "application/json" },
    body: JSON.stringify({ password: password, username: username }),
  });
  const data = await response.json();
  return data;
};
export const register = async (
  email: string,
  password: string,
  role: string,
  username: string
) => {
  const response = await fetch(
    "https://api.freeapi.app/api/v1/users/register",
    {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        role: role,
        username: username,
      }),
    }
  );
  const data = await response.json();
  return data;
};
