import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-3xl font-bold">
        What Our
        <span className="text-pink-500"> Customers </span>
        Say?
      </h3>
      <p className="mt-4 m-auto max-w-lg text-center info-text">
        {" "}
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div
        className="mt-25 flex flex-1 justify-evenly items-center
        max-lg:flex-col gap-14"
      >
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
