import React from "react";
import LoggedInUser from "../components/loggedInUser";
import data from "../Dummydata/data.json";

interface Navigation {
  name: string;
  link: string;
}
export default function Navbar() {
  const loggedInUser = data.loggedInUser;

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

  return (
    <div className="flex flex-row items-center justify-between py-3">
      <h1 className="text-black text-2xl font-semibold">AfyaYako</h1>
      <div className="flex flex-row space-x-16">
        <div className="flex flex-row gap-x-8 items-center">
          {navigationMenu.map((data) => {
            return (
              <li key={data.name} className="list-none ">
                <a href={data.link}> {data.name}</a>
              </li>
            );
          })}
        </div>
        <LoggedInUser details={loggedInUser} />
      </div>
    </div>
  );
}
