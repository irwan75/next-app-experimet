import DefaultButton from '../button/default-button';
import IconButton from '../button/icon-button';
import { formatCurrencyToIdr } from '@/utils/formatter';

export default function CardItem({itemName, price, description, imageSource, counter, handleCounterAdd, handleCounterMinus}:any ) {

    const formattedPrice = formatCurrencyToIdr(price);

    return (
        <div className="p-3 rounded-lg mb-4 shadow-lg shadow-grey-500">
            <div className="flex flex-col">
                <div className="flex flex-row mb-2 items-center justify-between">
                    <div className="flex flex-col">
                        <p className="font-bold mb-1">{itemName}</p>
                        <div className="text-sm text-gray-600">{description}</div>
                        <p className="mb-1 font-semibold text-red-500">{formattedPrice}</p>
                    </div>
                    <div className="mr-8"></div>
                    <div className='w-40 min-w-[10rem]'>
                        <img src={imageSource} width={200} alt="image-example" loading='lazy' className='rounded-md' />
                    </div>;
                </div>
                <div className='mt-1'></div>
                <div className="flex flex-row justify-end">
                    {counter <=0  ? (
                        <DefaultButton textButton="Tambah" handleClick={handleCounterAdd} />
                    ) : (
                        <>
                        <IconButton textButton="+" colorText='text-green-600' colorBorder='border-green-600'  handleClick={handleCounterAdd} />
                        <div className='mr-2'></div>
                        <div className='border pl-4 pr-4 rounded-md pt-0.5 pb-0.5'>{counter}</div>
                        <div className='ml-2'></div>
                        <IconButton textButton="-" colorText='text-red-600' colorBorder='border-red-600' handleClick={handleCounterMinus} />
                        </>
                    ) }
                </div>
            </div>
        </div>
    );
};