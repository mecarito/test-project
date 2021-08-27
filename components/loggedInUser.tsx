import React from "react";
import Image from "next/image";

export interface LoggedInUser {
  details: {
    name: string;
    image: string;
    occupation: string;
    notifications: number;
  };
}

export default function LoggedInUser(props: LoggedInUser) {
  return (
    <div>
      <div></div>
      <div className="flex flex-row">
        <div>
          <Image
            src={props.details.image}
            alt="logged in user"
            width={30}
            height={30}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col gap-y-4">
          <p>{props.details.name}</p>
          <p>{props.details.occupation}</p>
        </div>
      </div>
    </div>
  );
}
