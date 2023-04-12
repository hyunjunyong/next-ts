"use client";
import "./globals.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Chart } from "./chart/chart";
import Coin from "./coin/coin-price";
import Editor from "./editor/page";
import Client from "./apolloclient/page";
export default function Home() {
  const router = useRouter();

  const onLogin = () => {
    router.push("/dashboard");
  };

  return (
    <>
      <header>
        <div>
          <button className="" onClick={() => onLogin()}>
            login
          </button>
        </div>
      </header>
      <div className="bgGray">
        <section id="fstDiv">
          <div className="card">
            <Chart />
          </div>
        </section>
        <section id="secDiv">
          <div className="sec_Div card">
            <Editor />
          </div>
          <div className="sec_Div_sec">
            <div className="card">
              코인뉴스라도 어디서 가져와야되나 ex :크립토허브 api
            </div>
            <div className="card">
              <Client />
            </div>
            <div className="card">
              <Coin />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
