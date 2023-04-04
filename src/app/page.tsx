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
        <section>
          <div>123</div>
        </section>
        <section>
          <div>
            <Chart />
          </div>
        </section>
        <section>
          <div>123</div>
        </section>
        <section>
          <div>123</div>
        </section>
      </div>
    </>
  );
}
