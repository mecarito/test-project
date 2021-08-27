import React, { useEffect, useRef, useState } from "react";
import LoggedInUser from "../components/loggedInUser";
import data from "../Dummydata/data.json";

interface Navigation {
  name: string;
  link: string;
}
export default function Navbar() {
  const loggedInUser = data.loggedInUser;
  const selectedlink = useRef(false);

  const navigationMenu: Navigation[] = [
    {
      name: "Overview",
      link: "",
    },
    {
      name: "My availability",
      link: "",
    },
    {
      name: "Reviews",
      link: "",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const output = document.getElementById("Reviews");
      if (output) output.style.backgroundColor = "#2A585C";
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="flex flex-row items-center justify-between pt-4 shadow-sm">
      <h1 className="text-black text-2xl font-semibold">AfyaYako</h1>
      <div className="flex flex-row space-x-16">
        <div className="flex flex-row gap-x-8 items-center">
          {navigationMenu.map((data) => {
            return (
              <li key={data.name} className="list-none flex flex-col gap-y-4">
                <a
                  href={data.link}
                  className="hover:text-secondary focus:text-secondary"
                >
                  {data.name}
                </a>
                <div className="w-full h-0.5 " id={data.name}></div>
              </li>
            );
          })}
        </div>
        <LoggedInUser details={loggedInUser} />
      </div>
    </div>
  );
}
