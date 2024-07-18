import Image from "next/image";
import Link from "next/link";

interface CryptoRowProps {
    coin: IRaydiumPool;
    index: number;
}

export const CoinRow = ({ coin, index }: CryptoRowProps) => {
    return (
        <div className={`w-full flex gap-4 items-center py-5 font-semibold ${index % 2 === 0 ? 'bg-[#1f2937]' : 'bg-[#2a3647]'} rounded-lg px-1`}>
            <div className="w-[250px] flex items-center">
                <Image src={coin.mintA.logoURI} alt="Coin" className="w-[30px] h-[30px] mr-2 rounded-2xl" width={30} height={30} />
                <Image src={coin.mintB.logoURI} alt="Coin" className="w-[30px] h-[30px] mr-2 rounded-2xl translate-x-[-14px]" width={30} height={30} />
                <div>
                    <span className="text-white font-bold">{coin.mintA.symbol} - {coin.mintB.symbol}</span>
                </div>
            </div>
            <div className="w-[200px] flex items-center">
                <span className="text-white w-full text-right">{coin.tvl < 1000 ? coin.tvl.toFixed(2) : (+coin.tvl.toFixed(0)).toLocaleString()}$</span>
            </div>
            <div className="w-[200px] flex items-center">
                <span className="text-white w-full text-right">{(+coin.day.volume.toFixed(0)).toLocaleString()}$</span>
            </div>
            <div className="w-[200px] flex items-center">
                <span className="text-white w-full text-right">{(+coin.day.volumeFee.toFixed(0)).toLocaleString()}$</span>
            </div>
            <div className="w-[200px] flex items-center">
                <span className="text-white w-full text-right">{coin.day.apr > 999 ? '>999' : coin.day.apr.toFixed(2)}%</span>
            </div>
            <div className="w-[200px] flex items-center justify-end">
                <button className="bg-[#1f2937] px-6 py-1 rounded-lg border-[#22d1f8] border-2 hover:bg-[#22d1f8] hover:text-white text-[#22d1f8] hover:bg-opacity-30">
                    <Link target="_blank" href={`https://raydium.io/swap/?inputMint=${coin.mintB.address}&outputMint=${coin.mintA.address}`}>
                        <span className="font-bold">Swap</span>
                    </Link>
                </button>
            </div>
        </div>
    )
}