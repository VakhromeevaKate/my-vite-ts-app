import { useQuery } from '@tanstack/react-query';
import { getProductDetails } from '../api/productDetail';

function ProductDetailPage() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['productDetails'],
    queryFn: getProductDetails,
  });

  if (isLoading) {
    return <h1>Product detail list loading...</h1>;
  }

  if (isError) {
    return <h1>Error: {error instanceof Error ? error.message : 'Unknown error'}</h1>;
  }

  return (
    <section id="center">
      <div>
        <h1>Product detail list</h1>
      </div>
      <button
        type="button"
        className="counter"
        onClick={() => refetch()}
      >
        Update product detail list
      </button>
      <div className="usersContainer">
        {data?.data.map((item) => (
          <div key={item.id} className="userCard">
            <div>ID: {item.id}</div>
            <div>Weight: {item.weight}</div>
            <div>
              Dimensions: {item.dimensions.height} × {item.dimensions.width} × {item.dimensions.depth}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductDetailPage;