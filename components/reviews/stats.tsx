import React, { useState } from "react";
import calendar from "../../public/calendar.svg";
import Image from "next/image";

export function ReviewsStats() {
  return (
    <div>
      <div className="py-6 px-4 ring-gray-300 ring-1">
        <div className="flex flex-row justify-between">
          <h1 className="font-medium text-3xl">Stats</h1>
          <div className="flex flex-row items-center space-x-2">
            <Image
              src={calendar}
              alt="logged in user"
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <p className="text-gray-700">Last 3 months</p>
          </div>
        </div>
        <div className="flex flex-col mt-4 gap-y-4">
          <div className="grid grid-flow-row grid-cols-8 items-center gap-x-2">
            <p className="mr-4 col-span-4">Overal rating</p>
            <div className="w-full h-1 col-span-3 bg-gray-300 rounded-lg">
              <div className="w-4/5 h-1 bg-secondary rounded-lg"></div>
            </div>
            <p className="font-semibold col-span-1">4.6</p>
          </div>

          <div className="grid grid-flow-row grid-cols-8 items-center gap-x-2">
            <p className="mr-4 col-span-4">Wait time</p>
            <div className="w-full h-1 col-span-3 bg-gray-300 rounded-lg">
              <div className="w-3/5 h-1 bg-secondary rounded-lg"></div>
            </div>
            <p className="font-semibold col-span-1">3.8</p>
          </div>

          <div className="grid grid-flow-row grid-cols-8 items-center gap-x-2">
            <p className="mr-4 col-span-4">Bedside manner</p>
            <div className="w-full h-1 col-span-3 bg-gray-300 rounded-lg">
              <div className="w-2/5 h-1 bg-secondary rounded-lg"></div>
            </div>
            <p className="font-semibold col-span-1">2.9</p>
          </div>
        </div>
      </div>
    </div>
  );
}
