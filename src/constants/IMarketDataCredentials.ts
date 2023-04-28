
/**
 * The IMarketDataCredentials db table model
 */
export default interface IMarketDataCredentials {
    name: string;
    baseId: string;
    baseSymbol: string;
    exchangeId: string;
    percentExchangeVolume: string;
    priceQuote: string;
    priceUsd: string;
    quoteId: string;
    quoteSymbol: string;
    rank: string;
    changePercent24Hr: string;
    updated: number;
    volumeUsd24Hr: string;
  }
  
  