import { Metadata } from "next";

type Props = {
  params: {
    productId: string
  }
}

export const generateMetadata = async({params} : Props) : Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`)
    }, 100)
  });
  return {
    title: `Product ${title}`,
    description: `description of ${title}`,
  }
}

const ProductDetails = ({ params } : Props) => {
  return (
    <>
      <h1>Product detail page</h1>
      <h2>Product number - {params.productId}</h2>
    </>
  )
}

export default ProductDetails;
