"use client";
import Header from "@/components/header/Header";
import { AppProgressBar } from "next-nprogress-bar";
import React from "react";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const layout = ({ children }: { children: React.ReactNode }) => {
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
