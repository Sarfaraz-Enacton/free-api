"use client";
import React, { useState } from "react";
import Input from "../core/Input";
import Button from "../core/Button";
import { login } from "@/api/auth";
import { useFormik } from "formik";
import { logInSchema } from "@/schema";
import { toast } from "react-toastify";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: logInSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const data = await login(values.username, values.password);
        console.log(data);
        if (data?.message) {
          if (data?.success) {
            toast.success(data.message);
          } else {
            toast.error(data.message);
          }
        } else {
          toast.error("An error occurred during login.");
        }
      } catch (error) {
        toast.error("An error occurred during login.");
      } finally {
        setLoading(false);
      }
    },
  });
  return (
    <div className="max-w-sm mx-auto py-6 px-4 border rounded-lg space-y-4">
      <h1 className="text-2xl font-semibold text-center">Login</h1>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <Input
          type="text"
          id="username"
          label="Enter Username"
          required
          onChange={formik.handleChange}
          value={formik.values.username}
          onBlur={formik.handleBlur}
          errorMessage={formik.errors.username}
        />
        <Input
          type="password"
          id="password"
          label="Enter Password"
          required
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
          errorMessage={formik.errors.password}
        />
        <Button
          role="button"
          variant="primary"
          type="submit"
          label="Login"
          fullWidth={true}
          loading={loading}
        />
      </form>
    </div>
  );
};

export default LoginForm;
