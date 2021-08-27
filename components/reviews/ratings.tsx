import React from "react";

export function ReviewsRatings() {
  const ratings = ["All", "5 star", "4 star", "3 star", "2 star", "1 star"];
  return (
    <div className="flex flex-row list-none space-x-4 my-4">
      {ratings.map((items) => {
        return (
          <button
            key={items}
            className="px-4 py-2 ring-1 ring-gray-300
          hover:ring-secondary focus:ring-secondary"
          >
            {items}
          </button>
        );
      })}
    </div>
  );
}
