import { useState, useEffect } from 'react';

interface CoinData {
  rank: number;
  name: string;
  symbol: string;
  quotes: {
    KRW: {
      price: number;
      market_cap: number;
      volume_24h: number;
      percent_change_24h: number;
      percent_change_7d: number;
    };
  };
}

const Coin: React.FC = () => {
  const [data, setData] = useState<CoinData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          'https://api.coinpaprika.com/v1/tickers?quotes=KRW'
        );
        const json = await res.json();
        setData(json.slice(0, 100));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="coin-table">
      <table>
        <thead>
          <tr>
            <th>순위</th>
            <th>종목</th>
            <th>기호</th>
            <th>가격(KRW)</th>
            <th>총 시가</th>
            <th>거래량(24H)</th>
            <th>변동(24H)</th>
            <th>변동(7D)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((coin: CoinData, index: number) => (
            <tr key={index}>
              <td>{coin.rank}</td>
              <td>{coin.name}</td>
              <td>{coin.symbol}</td>
              <td>
                ₩{Number(coin.quotes.KRW.price.toFixed(1)).toLocaleString()}
              </td>
              <td>
                {(coin.quotes.KRW.market_cap / 1000000000000).toFixed(2)}T
              </td>
              <td>
                {(coin.quotes.KRW.volume_24h / 1000000000000).toFixed(2)}T
              </td>
              <td>{coin.quotes.KRW.percent_change_24h.toFixed(2)}%</td>
              <td>{coin.quotes.KRW.percent_change_7d.toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Coin;
