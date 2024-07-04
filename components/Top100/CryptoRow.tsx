"use client"

import Image from "next/image";
import Link from "next/link";

interface CryptoRowProps {
    coin: ICoin;
}

export const CryptoRow = ({ coin }: CryptoRowProps) => {
    return (
        <div className={`w-full flex gap-4 items-center py-3 ${coin.market_cap_rank % 2 === 0 ? 'bg-[#1f2937]' : 'bg-[#2a3647]'} rounded-lg px-1`}>
            <span className="w-[45px] font-bold">{coin.market_cap_rank}</span>
            <div className="w-[250px] flex items-center">
                <Image src={coin.image} alt="" className="w-[20px] h-[20px] mr-2" width={20} height={20} />
                <Link href={`/${coin.id}`}>{coin.name}</Link>
            </div>
            <span className="text-center w-[100px] text-white">{coin.symbol.toUpperCase()}</span>
            <span className="text-center w-[150px] text-white">{coin.current_price.toLocaleString()}$</span>
            {coin.price_change_percentage_24h_in_currency > 0 ? (
                <span className="text-center w-[100px] text-green-500">+{coin.price_change_percentage_24h_in_currency.toFixed(2)}%</span>
            ) : (
                <span className="text-center w-[100px] text-red-500">{coin.price_change_percentage_24h_in_currency.toFixed(2)}%</span>
            )}
            {coin.price_change_percentage_7d_in_currency > 0 ? (
                <span className="text-center w-[100px] text-green-500">+{coin.price_change_percentage_7d_in_currency.toFixed(2)}%</span>
            ) : (
                <span className="text-center w-[100px] text-red-500">{coin.price_change_percentage_7d_in_currency.toFixed(2)}%</span>
            )}
            {coin.price_change_percentage_30d_in_currency > 0 ? (
                <span className="text-center w-[100px] text-green-500">+{coin.price_change_percentage_30d_in_currency.toFixed(2)}%</span>
            ) : (
                <span className="text-center w-[100px] text-red-500">{coin.price_change_percentage_30d_in_currency.toFixed(2)}%</span>
            )}
            <span className="text-center w-[250px] text-white">{coin.market_cap.toLocaleString()}$</span>
            <span className="text-center w-[250px] text-white">{coin.total_volume.toLocaleString()}$</span>
        </div>
    )
}