"use client";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import MenuCard from "@/components/cards/MenuCard";
import { useRouter } from "next/navigation";

export default function Home() {
  const { push } = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      push("/AdminLogin");
    }
  }, []);
  return (
    <div>
      <Navbar />
      <div className=" flex flex-col gap-5 p-10">
        <h1 className="text-7xl text-center font-semibold text-amber-600">
          {" "}
          WELCOME !!
        </h1>
        <div className="text-3xl text-center font-semibold  text-amber-600">
          GET ALL YOUR WORK DONE HERE...
        </div>
        <div className="mt-5">
          <MenuCard />
        </div>
      </div>
    </div>
  );
}
