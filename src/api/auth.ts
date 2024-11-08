import Cookies from "js-cookie";

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
  const authToken = Cookies.get("auth_token");
  const response = await fetch(
    "https://api.freeapi.app/api/v1/users/current-user",
    {
      method: "GET",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
  const data = await response.json();
  return data;
};

// export const getUser = async () => {
//   const authToken = Cookies.get("auth_token");
//   try {
//     const response = await fetch(
//       "https://api.freeapi.app/api/v1/users/current-user",
//       {
//         method: "GET",
//         headers: {
//           accept: "application/json",
//           "content-type": "application/json",
//           Authorization: `Bearer ${authToken}`,
//         },
//       }
//     );

//     if (!response.ok) {
//       // Handle HTTP errors
//       const errorData = await response.json();
//       throw new Error(errorData.message || "Failed to fetch user data");
//     }

//     const data = await response.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.error("Error fetching user data:", error);
//     return null; // Return the error message
//   }
// };
