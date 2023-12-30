'use client';
import React, { useState } from 'react';
import { ecomData } from '@/data';
import Filters from '../../components/filters';
import Product from '../../components/product';

function ResultsPage() {
  //console.log(ecomData);

  const [itemsData, setItemsData] = useState(ecomData);
  const [filteredItemsData, setFilteredItemsData] = useState(ecomData);

  return (
    <div className="ml-7">
      <h2 className="text-xl">ResultsPage</h2>
      <div className="flex">
        <div className="filters  min-w-fit  max-w-lg:">
          <Filters
            setFilteredItemsData={setFilteredItemsData}
            itemsData={itemsData}
          />
        </div>
        <div className="products flex px-8 ">
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 min-w-16">
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
    </div>
  );
}

export default ResultsPage;
