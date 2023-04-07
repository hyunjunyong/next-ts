// interface PostData {
//   market: string;
//   korean_name: string;
//   english_name: string;
// }

// export default async function Coin() {
//   const data = await getData();
//   if (!data) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       {data.map((coin, index) => (
//         <div key={index}>
//           <h1>{coin.market}</h1>
//           <p>{coin.korean_name}</p>
//           <p>{coin.english_name}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// async function getData() {
//   const res = await fetch("https://api.upbit.com/v1/market/all");
//   const data = await res.json();
//   console.log(data);
//   return data;
// }

import { useState, useEffect } from "react";

interface CoinData {
  market: string;
  korean_name: string;
  english_name: string;
}

const Coin: React.FC = () => {
  const [data, setData] = useState<CoinData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://api.upbit.com/v1/market/all");
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  const KRWData = data.filter((coin) => coin.market.indexOf("KRW") !== -1);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {KRWData.map((coin, index) => (
        <div key={index}>
          <p>
            {coin.market},{coin.korean_name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Coin;
