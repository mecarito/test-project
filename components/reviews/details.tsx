import React from "react";

export interface Reviews {
  details: {
    name: string;
    image: string;
    rating: number;
    date: string;
    content: string;
  };
}

export function ReviewsDetails(props: Reviews) {
  return <div>{props.reviews.content}</div>;
}
