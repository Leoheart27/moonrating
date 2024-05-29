'use client';
import { useState } from "react";
import { StarsReview } from '../components/StarsComponent'

const Page = () => {

  const [rating, setRating] = useState(0)

  return (
    <div className="w-screen h-screen flex justify-center items-center 
    bg-gradient-to-b from-[#2e026d] to-[#15162c] flex-col gap-8">
      <StarsReview rating={rating} setRating={setRating} />
      <h1 className="text-5xl">
        {rating == 1 && "Trash"}
        {rating == 2 && "Bad"}
        {rating == 3 && "Ok"}
        {rating == 4 && "Good"}
        {rating == 5 && "Great"}
      </h1>
      <button className="text-2xl border border-white px-4 py-2" onClick={() => alert("Thank you for your review")}>Send review</button>
    </div>

  );
};

export default Page;