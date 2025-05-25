import React from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard/Dashboard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);
const MainLayout = () => {

  useGSAP(()=> {
      gsap.set('.animate', {
      autoAlpha:0
    })

    gsap.to('.animate', {
      autoAlpha:1,
      duration: 0.5,
      ease: "power2.in",
      stagger:0.2
    })
  },[])
  return (
    <main className="mx-auto overflow-hidden w-screen max-w-[1920px] h-screen flex flex-row">
      <Sidebar />
      <div className="w-full h-full">
        <Dashboard />
      </div>
    </main>
  );
};

export default MainLayout;
