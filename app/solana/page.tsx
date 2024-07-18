import { CoinRow } from "@/components/solana/trending/CoinRow";
import { InfoRow } from "@/components/solana/trending/InfoRow";

export const fetchCache = 'force-no-store';

export default async function Home() {

  const res = await fetch('https://api-v3.raydium.io/pools/info/list?poolType=all&poolSortField=default&sortType=desc&pageSize=100&page=1');
  const data: { id: string, success: boolean, data: { count: number, data: IRaydiumPool[] } } = await res.json();

  const mainInfoRes = await fetch('https://api-v3.raydium.io/main/info');
  const mainInfoData = await mainInfoRes.json();

  return (
    <main className="defaultHeight flex flex-col items-center justify-between px-24">
        <div className="flex items-center justify-between w-[1500px] my-4">
            <h1 className="text-purple-400 text-4xl font-bold">Liquidity Pools</h1>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-xl bg-purple-400 rounded-lg px-4 py-2 w-auto">
                    <h3 className="text-white">TVL:</h3>
                    <span className="text-white">{(+mainInfoData.data.tvl.toFixed(0)).toLocaleString()}$</span>
                </div>
                <div className="flex items-center gap-2 text-xl bg-purple-400 rounded-lg px-4 py-2 w-auto">
                    <h3 className="text-white">Volume 24H:</h3>
                    <span className="text-white">{(+mainInfoData.data.volume24.toFixed(0)).toLocaleString()}$</span>
                </div>
            </div>
        </div>
        <div className="w-[1500px] maxDefaultHeight overflow-hidden">
            <InfoRow />
            {Array.isArray(data.data.data) ? (
                <div className="h-full overflow-y-auto flex flex-col pb-14">
                    {data.data.data.map((coin: IRaydiumPool, index: number) => (
                        <CoinRow key={coin.id} coin={coin} index={index} />
                    ))}
                </div>
            ) : (
                <div className="text-red-500">Something went wrong!</div>
            )}
        </div>
    </main>
  );
}