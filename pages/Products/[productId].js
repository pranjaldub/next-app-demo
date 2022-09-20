import React from "react";

function ProductId({ product }) {
  return <div>{product.content}</div>;
}
export async function getStaticPaths() {
  const products = [{ productId: "1" }];
  const paths = products.map((product) => ({
    params: { productId: product.productId },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const productId = context.params.productId;

  const product = {
    productId: productId,
    content: `I'm the post with id ${productId}!`,
  };
  return { props: { product } };
}

export default ProductId;
