import { notFound } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

const ReviewDetail = ({
  params,
} : {
  params: {
    productId: string,
    reviewId: string
  };
}) => {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error loadin review.");
  }
  if (parseInt(params.reviewId) > 100) {
    notFound();
  }

  return (
    <>
      <h2>Product number - {params.productId}</h2>
      <h1>Product review - {params.reviewId}</h1>
    </>
  )
}

export default ReviewDetail;
