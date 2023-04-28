import useSWR from "swr";
import { useEffect, useState } from "react";
import BTC from "cryptocurrency-icons/svg/icon/btc.svg";
import ETH from "cryptocurrency-icons/svg/icon/eth.svg";
import BNB from "cryptocurrency-icons/svg/icon/bnb.svg";
import LTC from "cryptocurrency-icons/svg/icon/ltc.svg";
import XRP from "cryptocurrency-icons/svg/icon/xrp.svg";
import TRX from "cryptocurrency-icons/svg/icon/trx.svg";
import IMarketDataCredentials from "@/constants/IMarketDataCredentials";

// const [currentMarketPrice, setcurrentMarketPrice] = useState();

// const handleFetchCoinPrices = async () => {
//   let result = await fetch(
//     `https://api.coincap.io/v2/assets?ids=bitcoin,ethereum,tron,xrp,litecoin`,
//     {
//       method: "get",
//       // credentials: "include",
//     }
//   );

//   const data = await result.json();

//   console.log("data fetched: ", data.data);
//   return data;
// };

// export function FetchPrices() {
//   fetch(
//     "https://api.coincap.io/v2/assets?ids=bitcoin,ethereum,tron,xrp,litecoin"
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       console.log("data: ", data.data);
//       currentMarketPrice = data.data;
//       console.log("currentMarketPriceeee: ", currentMarketPrice);
//       return currentMarketPrice;
//     });
// }

// setInterval(FetchPrices, 10000);

// let currentMarketPrice: IMarketDataCredentials = FetchPrices(); 

export const coinInfo = [
  {
    coinName: "Bitcoin",
    coinCode: "BTC/USDT",
    coinImage: BTC,
    coinPrice: "$12,000",
    coinRate: "-13.54",
  },
  {
    coinName: "Etherum",
    coinCode: "ETH/USDT",
    coinImage: ETH,
    coinPrice: "$2,162",
    coinRate: "+4.54",
  },
  {
    coinName: "Tron network",
    coinCode: "TRX/USDT",
    coinImage: TRX,
    coinPrice: "$35.9",
    coinRate: "-182.54",
  },
  {
    coinName: "XRP",
    coinCode: "XRP/USDT",
    coinImage: XRP,
    coinPrice: "$52.09",
    coinRate: "-43.49",
  },
  {
    coinName: "Litecoin",
    coinCode: "LTC/USDT",
    coinImage: LTC,
    coinPrice: "$1,195",
    coinRate: "+5.54",
  },
];
