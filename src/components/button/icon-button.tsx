export default function IconButton({textButton, colorText, colorBorder, handleClick}:any) {
    return (
        <div className={`border ${colorBorder} w-8 rounded-lg justify-items-center hover:bg-gray-100 cursor-pointer`} onClick={handleClick}>
            <p className={`${colorText} text-lg`}>{textButton}</p>
        </div>
    );
};