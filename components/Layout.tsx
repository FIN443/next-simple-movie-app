import React from "react";
import Navbar from "./NavBar";

interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
}
