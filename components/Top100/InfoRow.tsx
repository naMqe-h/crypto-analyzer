export const InfoRow = () => {
  return (
    <div className="w-full h-[50px] flex gap-4 items-center rounded-lg font-bold px-1">
        <span className="w-[45px]">#</span>
        <span className="w-[250px]">Name</span>
        <span className="text-center w-[100px]">Symbol</span>
        <span className="text-center w-[150px]">Price</span>
        <span className="text-center w-[100px]">Price 24h</span>
        <span className="text-center w-[100px]">Price 7d</span>
        <span className="text-center w-[100px]">Price 30d</span>
        <span className="text-center w-[250px]">Market Cap</span>
        <span className="text-center w-[250px]">Total Volume</span>
    </div>
  );
};
