import Link from "next/link"

export const Navbar = () => {

    return (
        <div className="h-[90px] flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold">Crypto Analyzer</h1>
            <div className="flex items-center gap-6">
                <Link href="/" className="text-lg tracking-wider hover:text-[#dca54c]">Home</Link>
                <Link href="/solana" className="text-lg tracking-wider text-purple-400 hover:text-purple-600">Solana</Link>
                <Link href="/trending" className="text-lg tracking-wider hover:text-[#dca54c]">Trending</Link>
                <Link href="/top-gainers-losers" className="text-lg tracking-wider hover:text-[#dca54c]">Top Gainers/Losers</Link>
                <Link href="/market-cap-dominance" className="text-lg tracking-wider hover:text-[#dca54c]">Market Cap Dominance</Link>
            </div>
        </div>
    )
}