import DefaultButton from '../button/default-button';
import { formatCurrencyToIdr } from '@/utils/formatter';

export default function FloatingBox({onTapCheckout, totalPrice, totalItem}:any){
    const formattedPrice = formatCurrencyToIdr(totalPrice);
  return (
    <div className="fixed bottom-4 left-4 right-4 bg-white px-4 py-2 shadow-xl rounded-lg">
        <div className="flex flex-row justify-between">
            <div className="flex flex-col">
                <p className="font-semibold text-red-500 text-lg">{formattedPrice}</p>
                <p className="text-sm text-gray-500">{totalItem} Item</p>
            </div>
            <DefaultButton textButton="Checkout" sizeButton="text-lg" handleClick={onTapCheckout} />
        </div>
      
    </div>
  );
};