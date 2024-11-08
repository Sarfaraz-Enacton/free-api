"use client";
import Header from "@/components/header/Header";
import { AppProgressBar } from "next-nprogress-bar";
import React, { useEffect } from "react";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { routes } from "@/routes-config";
import useAuth from "@/hooks/useAuth";
// import { useRouter } from "next/router";

const layout = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn, data } = useAuth(); // Use the custom hook
  console.log(isLoggedIn, data);
  return (
    <>
      <Header />
      <main>
        <div className="container">{children}</div>
      </main>
      <AppProgressBar
        height="4px"
        color="var(--foreground)"
        options={{ showSpinner: false }}
        shallowRouting
      />
      <ToastContainer
        position="top-right"
        theme="light"
        closeOnClick
        pauseOnHover={false}
        transition={Slide}
        draggable
      />
    </>
  );
};

export default layout;
