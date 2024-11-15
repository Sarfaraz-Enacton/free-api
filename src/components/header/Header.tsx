import Link from "next/link";
import React from "react";
import Button from "../core/Button";
import { routes } from "@/routes-config";
import useAuth from "@/hooks/useAuth";

const Header = () => {
  const { isLoggedIn, data } = useAuth();
  return (
    <header className="py-3 sticky top-0 bg-slate-50/75 border-b backdrop-blur-sm">
      <div className="container">
        <nav className="flex items-center justify-between">
          <Link href={routes.home} className="text-2xl">
            Logo
          </Link>

          {isLoggedIn ? (
            <p>Hello, {data?.username}</p>
          ) : isLoggedIn === false ? (
            <div className="flex items-center gap-4">
              <Button
                role="link"
                variant="primary"
                url={routes.login}
                label="Login"
              />
              <Button
                role="link"
                variant="primary"
                url={routes.register}
                label="Sign Up"
              />
            </div>
          ):(
            <p>loading...</p>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
