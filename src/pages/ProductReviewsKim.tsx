import { useQuery } from '@tanstack/react-query';
import { getProductReviews } from '../api/productReviews';

export function ProductReviewsKim() {
  const { data, refetch, isLoading, isFetching } = useQuery({
    queryKey: ['productReviews'],
    queryFn: getProductReviews,
  });

  const loading = isFetching || isLoading;

  return (
    <div>
      <h1>Product reviews</h1>

      <button
        type="button"
        className="counter"
        onClick={() => refetch()}
      >
        Update reviews list
      </button>

      <div className="reviewsContainer">
        {loading && <h1>Reviews list loading...</h1>}

        {!loading && data?.data.map((review) => (
          <div key={review.id} className="reviewCard">
            <p><b>Review №{review.id}</b></p>
            <p>Rating: {review.rating}</p>
            <p>Comment: {review.comment}</p>
            <p>User ID: {review.user.id}</p>
            <p>Product ID: {review.product.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}