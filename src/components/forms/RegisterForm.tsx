"use client";
import React, { useState } from "react";
import Input from "../core/Input";
import Button from "../core/Button";
import { login, register } from "@/api/auth";
import { useFormik } from "formik";
import { registerSchema } from "@/schema";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      role: "",
      username: "",
    },
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const data = await register(
          values.email,
          values.password,
          values.role,
          values.username.toLowerCase()
        );
        console.log(data);
        if (data?.message) {
          if (data?.success) {
            toast.success(data.message);
            const logData = await login(values.username.toLowerCase(), values.password);
          } else {
            data.errors[0]
              ? toast.error(data.errors[0].role)
              : toast.error(data.message);
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
          type="email"
          id="email"
          label="Enter Username"
          required
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
          errorMessage={formik.errors.email}
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
        <Input
          type="text"
          id="role"
          label="Enter Role"
          required
          onChange={formik.handleChange}
          value={formik.values.role}
          onBlur={formik.handleBlur}
          errorMessage={formik.errors.role}
        />
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
        <Button
          role="button"
          variant="primary"
          type="submit"
          label="Register"
          fullWidth={true}
          loading={loading}
        />
      </form>
    </div>
  );
};

export default RegisterForm;
