import * as Yup from "yup";

export const logInSchema = Yup.object().shape({
  username: Yup.string().required("enter your email"),
  password: Yup.string()
    .required("enter your password")
    .min(8, "Password is too short"),
});

export const registerSchema = Yup.object().shape({
  email: Yup.string().required("enter your email"),
  password: Yup.string()
    .required("enter your password")
    .min(8, "Password is too short"),
  role: Yup.string().required("enter your role"),
  username: Yup.string().required("enter your username"),
});
