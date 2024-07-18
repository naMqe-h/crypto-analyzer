export const InfoRow = () => {
    return (
      <div className="w-full h-[50px] flex gap-4 items-center rounded-lg font-bold px-1">
          <span className="w-[250px]">Pair Info</span>
          <span className="text-right w-[200px]">Liquidity</span>
          <span className="text-right w-[200px]">Volume 24H</span>
          <span className="text-right w-[200px]">Fees</span>
          <span className="text-right w-[200px]">APR 24H</span>
      </div>
    );
  };
  