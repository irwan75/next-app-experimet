'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import CardItem from '@/components/card/card-item';
import FloatingBox from '@/components/floating/floating-box';
import { listDataPlp } from '@/data/dummy-data';

export default function Home() {

  const [totalItem, setTotalItem] = useState(0);
  let [totalPrice, setTotalPrice] = useState(0);
  const [dataList, setDataList] = useState(listDataPlp);

  const handleCounterAdd = (id:number) => {
    const item = dataList.find((item) => item.id === id);
    if (item) {
      item.qtyCart += 1;
    }

    setDataList([...dataList]);
    recalculateTotal();
  }

  const handleCounterMinus = (id:number) => {
    const item = dataList.find((item) => item.id === id);
    if (item) {
      item.qtyCart -= 1;
    }

    setDataList([...dataList]);
    recalculateTotal();
  }

  const recalculateTotal = () => {
    let totalItem = 0;
    let totalPrice = 0;
    dataList.forEach((item) => {
      totalItem += item.qtyCart;
      totalPrice += (item.qtyCart * item.price);
    });
    setTotalItem(totalItem);
    setTotalPrice(totalPrice);
  }

  const onTapCheckout = () => {
    console.log('checkout');
  }

  return (
    <div className="mx-4">
      {dataList.map((item) => (
          <CardItem
          key={item.id} 
          itemName={item.itemName} 
          price={item.price} 
          description={item.description} 
          imageSource={item.imageSource}
          counter={item.qtyCart} 
          handleCounterAdd={() => handleCounterAdd(item.id)} 
          handleCounterMinus={() => handleCounterMinus(item.id)}/>
      ))}
      {totalItem > 0 && (
        <div className="mt-24">
          <FloatingBox 
          onTapCheckout={onTapCheckout} 
          totalPrice={totalPrice} 
          totalItem={totalItem} />
        </div>
      )}
    </div>
  );
}
