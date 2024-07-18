interface ICoin {
    id: string,
    symbol: string,
    name: string,
    image: string,
    current_price: number,
    market_cap: number,
    market_cap_rank: number,
    fully_diluted_valuation: number,
    total_volume: number,
    high_24h: number,
    low_24h: number,
    price_change_24h: number,
    price_change_percentage_24h: number,
    market_cap_change_24h: number,
    market_cap_change_percentage_24h: number,
    circulating_supply: number,
    total_supply: number,
    max_supply: number,
    ath: number,
    ath_change_percentage: number,
    ath_date: string,
    atl: number,
    atl_change_percentage: number,
    atl_date: string,
    roi: null | number,
    last_updated: string,
    price_change_percentage_24h_in_currency: number,
    price_change_percentage_30d_in_currency: number,
    price_change_percentage_7d_in_currency: number,
}

interface IRaydiumPool {
    type: string;
    programId: string;
    id: string;
    mintA: {
        chainId: number;
        address: string;
        programId: string;
        logoURI: string;
        symbol: string;
        name: string;
        decimals: number;
        tags: string[];
        extensions: object;
    };
    mintB: {
        chainId: number;
        address: string;
        programId: string;
        logoURI: string;
        symbol: string;
        name: string;
        decimals: number;
        tags: string[];
        extensions: object;
    };
    rewardDefaultPoolInfos: string;
    rewardDefaultInfos: {
        mint: {
            chainId: number;
            address: string;
            programId: string;
            logoURI: string;
            symbol: string;
            name: string;
            decimals: number;
            tags: string[];
            extensions: object;
        };
        perSecond: string;
        startTime: string;
        endTime: string;
    }[];
    price: number;
    mintAmountA: number;
    mintAmountB: number;
    feeRate: number;
    openTime: string;
    tvl: number;
    day: {
        volume: number;
        volumeQuote: number;
        volumeFee: number;
        apr: number;
        feeApr: number;
        priceMin: number;
        priceMax: number;
        rewardApr: number[];
    };
    week: {
        volume: number;
        volumeQuote: number;
        volumeFee: number;
        apr: number;
        feeApr: number;
        priceMin: number;
        priceMax: number;
        rewardApr: number[];
    };
    month: {
        volume: number;
        volumeQuote: number;
        volumeFee: number;
        apr: number;
        feeApr: number;
        priceMin: number;
        priceMax: number;
        rewardApr: number[];
    };
    pooltype: any[];
    farmUpcomingCount: number;
    farmOngoingCount: number;
    farmFinishedCount: number;
    config: {
        id: string;
        index: number;
        protocolFeeRate: number;
        tradeFeeRate: number;
        tickSpacing: number;
        fundFeeRate: number;
        description: string;
        defaultRange: number;
        defaultRangePoint: number[];
    };
}
