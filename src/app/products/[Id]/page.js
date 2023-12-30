'use client';
import { useEffect, useState } from 'react';

import { ecomData } from '@/data';

function Page({ params }) {
  console.log('params', params.Id);
  const productId = parseInt(params.Id, 10);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Find the product with the matching productId
    const foundProduct = ecomData.find((p) => p.productId === productId);
    setProduct(foundProduct);
  }, [productId]);
  if (product === null) {
    return <p>Loading...</p>;
  }

  // Check if the product is not found
  if (!product) {
    return <p>Product Not Found</p>;
  }

  console.log('product', product);
  return (
    <div>
      {params.Id}
      {product && (
        <>
          <h1>{product.productName}</h1>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
        </>
      )}
    </div>
  );
}

export default Page;
