export default function DefaultButton({textButton, sizeButton = "text-sm", handleClick}:any) {
    return (
        <div className="bg-cyan-800 pt-1.5 pb-1.5 pl-10 pr-10 rounded-lg shadow-lg shadow-grey-500 content-center hover:bg-cyan-900 cursor-pointer" onClick={handleClick}>
            <p className={`text-white ${sizeButton}`}>{textButton}</p>
        </div>
    );
};