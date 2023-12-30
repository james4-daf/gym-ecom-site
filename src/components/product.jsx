'use client';
import React from 'react';
import Link from 'next/link';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

function Product(props) {
  const { productName, imageUrl, price, productId } = props;
  console.log(productId);
  // console.log(productId);
  // if (!productName) {
  //   // You can add some error handling or return null
  //   return null;
  // }
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>
            <Link href={`/products/${productId}`}>{productName}</Link>
            {/* {key} */}
          </CardTitle>
          <CardDescription>cash</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>{price}</p>
        </CardFooter>
      </Card>
    </>
  );
}

export default Product;
