const ProductDetailLayout = ({
  children,
} :{
  children : React.ReactNode
}) => {
  return (
    <>
      {children}
      <h2>
        Feature Products
      </h2>
    </>
  )
}

export default ProductDetailLayout;
