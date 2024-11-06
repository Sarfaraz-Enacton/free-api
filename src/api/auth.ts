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
export const getUser = async () => {
  const response = await fetch(
    "https://api.freeapi.app/api/v1/users/current-user",
    {
      method: "GET",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzJiNWE4OTg2NzExM2M5NDFmMDdkNGMiLCJlbWFpbCI6InVzZXIuZW1haWxAZG9tYWluLmNvbSIsInVzZXJuYW1lIjoiZG9lam9obiIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTczMDkwMDQ3MCwiZXhwIjoxNzMwOTg2ODcwfQ.37g9mKJj5R2dqtxMm55d0koTM6_4ujvdzqvPB019JDU`,
      },
    }
  );
  const data = await response.json();
  console.log(data);
  return data;
};
