import React from "react";
import { metadata } from "../layout";
import SideBar from "./components/SideBar";

metadata.title = "Enoverlab - Internship Registration";

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full overflow-hidden font-plus-jakarta-sans">
      <SideBar />
      <div className="w-full overflow-auto px-5 py-11">{children}</div>
    </div>
  );
}
