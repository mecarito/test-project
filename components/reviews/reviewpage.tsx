import React from "react";
import { ReviewsDetails } from "./details";
import { ReviewsRatings } from "./ratings";
import { ReviewsStats } from "./stats";
import data from "../../Dummydata/data.json";

export function ReviewsPage() {
  const reviews = data.reviews;
  return (
    <div className="mx-28 my-8">
      <h1 className="text-3xl mb-8">Reviews</h1>
      <ReviewsRatings />
      <ReviewsStats />
      <ReviewsDetails details={reviews} />
    </div>
  );
}
