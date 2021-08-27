import React from "react";
import Image from "next/image";
import star from "../../public/star.svg";

export interface Reviews {
  name: string;
  image: string;
  rating: number;
  date: string;
  content: string;
}

export function ReviewsDetails(props: { details: Reviews[] }) {
  return (
    <div className="mt-8">
      <div className="text-2xl mb-6 flex flex-row space-x-2">
        <p> {props.details.length}</p>
        <h1>Reviews</h1>
      </div>

      {props.details.map((data) => {
        return (
          <div key={data.name} className="flex flex-col mb-8 gap-y-4">
            <div className="flex flex-row gap-x-2 items-center">
              <Image
                src={data.image}
                alt="user"
                width={40}
                height={40}
                className="rounded-full"
              />

              <div className="flex flex-col ">
                <p className="text-lg">{data.name}</p>
                <div className="flex flex-row items-center gap-x-2">
                  <div>
                    <Image
                      src={star}
                      alt="rating icon"
                      width={15}
                      height={15}
                    />
                  </div>
                  <p className="text-secondary">{data.rating}</p>
                  <p className="ml-2 text-gray-600">{data.date}</p>
                </div>
              </div>
            </div>
            <p className="text-gray-700">{data.content}</p>
            <p className="text-secondary font-semibold">Read review</p>
          </div>
        );
      })}
    </div>
  );
}
