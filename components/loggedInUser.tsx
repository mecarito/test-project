import React from "react";
import Image from "next/image";
import { Badge } from "@material-ui/core";
import bell from "../public/bell.svg";
import chevron from "../public/chevron-down.svg";

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
    <div className="flex flex-row items-center gap-x-8">
      <div>
        <Badge badgeContent={4} color="secondary">
          <Image src={bell} alt="notifications" width={20} height={20} />
        </Badge>
      </div>
      <div className="flex flex-row items-center gap-x-2">
        {/* <div> */}
        <Image
          src={props.details.image}
          alt="logged in user"
          width={30}
          height={30}
          className="rounded-full"
        />
        {/* </div> */}
        <div className="flex flex-col gap-0">
          <p className="text-xs">{props.details.name}</p>
          <p className="text-xs">{props.details.occupation}</p>
        </div>
        <Image src={chevron} alt="select an option" width={20} height={20} />
      </div>
    </div>
  );
}
