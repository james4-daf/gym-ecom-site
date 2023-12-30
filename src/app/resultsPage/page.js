'use client';
import React, { useState } from 'react';
import { ecomData } from '@/data';
import Filters from '@/components/filters';
import Product from '@/components/Product';

function ResultsPage() {
  //console.log(ecomData);

  const [itemsData, setItemsData] = useState(ecomData);
  const [filteredItemsData, setFilteredItemsData] = useState(ecomData);

  return (
    <>
      <h2 className="text-xl">ResultsPage</h2>
      <div className="grid grid-cols-6 ">
        <div className="col-span-1 inline-grid max-w-md">
          <Filters
            setFilteredItemsData={setFilteredItemsData}
            itemsData={itemsData}
          />
        </div>
        <div className="col-span-2 p-5 ">
          <ul>
            {filteredItemsData.map((product) => {
              const { productName, price, productId } = product;
              return (
                <Product
                  key={productId}
                  productId={productId}
                  productName={productName}
                  price={price}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ResultsPage;
