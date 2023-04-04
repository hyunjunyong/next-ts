"use client";
import "./globals.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Chart } from "./chart";
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
          <div>
            <Chart />
          </div>
        </section>
        <section id="secDiv">
          <div>123</div>
          <div>456</div>
          <div>789</div>
        </section>
        <section id="trdDiv">
          <div>123</div>
          <div>456</div>
          <div>789</div>
        </section>
      </div>
    </>
  );
}
