"use client";
import "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const onLogin = () => {
    router.push("/dashboard");
  };

  return (
    <main>
      <div>
        <button className="" onClick={() => onLogin()}>
          login
        </button>
      </div>
      <div>
        <Link href="/dashboard">link dashboard</Link>
      </div>
    </main>
  );
}
