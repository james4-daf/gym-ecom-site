'use client';
import React from 'react';
import { ecomData } from '@/data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

function Filters({ setFilteredItemsData }) {
  const handleCategoryFilter = (category) => {
    // Filter the data based on the selected category
    const filtered = ecomData.filter((item) => item.category === category);
    setFilteredItemsData(filtered);
  };

  const ecomCategories = [
    ...new Set(ecomData.map((product) => product.category)),
  ];
  //console.log(ecomCategories);
  return (
    <div className="pl-4">
      <section>
        <Button onClick={() => setFilteredItemsData(ecomData)}>
          Clear all filters
        </Button>
      </section>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Category</AccordionTrigger>
          <AccordionContent>
            <ul className="inline-grid grid-cols-3 gap-1">
              {ecomCategories.map((category, id) => {
                return (
                  <Button
                    key={id}
                    className="text-left "
                    onClick={() => handleCategoryFilter(category)}
                  >
                    {category}
                  </Button>
                );
              })}
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Gender</AccordionTrigger>
          <AccordionContent>
            <button className="text-left">Men</button>
            <button>Women</button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Size</AccordionTrigger>
          <AccordionContent className="inline-grid grid-cols-3 gap-2">
            <Button>Small</Button>
            <Button>Medium</Button>
            <Button>Large</Button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Filters;
