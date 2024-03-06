import Link from "next/link";

const Products = () => {
  const productId = 3;
  return (
    <div>
      <h1>Products page</h1>
      <h2>
        <Link href="/products/1">Product 1</Link>
      </h2>
      <h2>
        <Link href="/products/2" replace>Product 2</Link>
      </h2>
      <h2>
        <Link href={`products/${productId}`}>Product {productId}</Link>
      </h2>
      <Link href="/">Home</Link>
    </div>
  );
}

export default Products;
