'use client';

import DefaultButton from '@/components/button/default-button';
import { listDataPlp } from '@/data/dummy-data';
import { useState } from "react";

export default function Home() {

  const [totalItem, setTotalItem] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [dataList, setDataList] = useState(listDataPlp);

  const handleCounterAdd = (id: number) => {
    const item = dataList.find((item) => item.id === id);
    if (item) {
      item.qtyCart += 1;
    }

    setDataList([...dataList]);
    recalculateTotal();
  }

  const handleCounterMinus = (id: number) => {
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
    const dataCallback = {
      status: "success",
      message: "Webview berhasil di tutup oleh user",
      userId: 12345,
    }
    const flutterBridge = window.flutter_inappwebview;

    // if (typeof window !== 'undefined' && window.flutter_inappwebview) {
    if (typeof flutterBridge?.callHandler === 'function') {
      // window.flutter_inappwebview.callHandler('closeWebViewHandler', dataCallback);
      flutterBridge.callHandler('closeWebViewHandler', "/home");
    }
  }

  return (
    <div className="bg-white h-screen w-screen overflow-y-auto content-center p-10">
      <span className="text-black">Click button below to trigger exit page</span>
      <DefaultButton
        textButton="Checkout"
        sizeButton="text-lg"
        handleClick={onTapCheckout}
      />
      {/* {dataList.map((item) => (
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
      )} */}
    </div>
  );
}
