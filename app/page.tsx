import { CryptoRow } from "@/components/Top100/CryptoRow";
import { InfoRow } from "@/components/Top100/InfoRow";

export const fetchCache = 'force-no-store';

export default async function Home() {

  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&price_change_percentage=24h,7d,30d&page=1');
  const data: ICoin[] | { status: { error_message: string, error_code: number } } = await res.json();
  Array.isArray(data) && data.sort((a, b) => a.market_cap_rank - b.market_cap_rank);

  return (
    <main className="defaultHeight flex flex-col items-center justify-between px-24">
      <div className="w-[1500px] maxDefaultHeight overflow-hidden">
        <InfoRow />
          {Array.isArray(data) ? (
            <div className="h-full overflow-y-auto flex flex-col pb-14">
              {data.map((coin: any) => (
                <CryptoRow key={coin.id} coin={coin} />
              ))}
            </div>
          ) : (
            <div className="text-red-500">{data.status.error_message.split(".")[0]}</div>
          )}
      </div>
    </main>
  );
}