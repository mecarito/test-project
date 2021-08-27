import React from "react";
import { ReviewsDetails } from "./details";
import { ReviewsRatings } from "./ratings";
import { ReviewsStats } from "./stats";
import data from "../../Dummydata/data.json";

export function ReviewsPage() {
  const reviews = data.reviews;
  return (
    <div className="mx-24 my-8">
      <h1 className="text-3xl mb-2 mt-12">Reviews</h1>
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <ReviewsRatings />
          <ReviewsDetails details={reviews} />
        </div>
        <ReviewsStats />
      </div>
    </div>
  );
}
