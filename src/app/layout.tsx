"use client";

import "./globals.css";
import Image from "next/image";
import home from "./img/home.png";
import dashboard from "./img/dashboard.png";
import chart from "./img/bar-chart.png";
import kanban from "./img/kanban.png";
import Settings from "./img/setting.png";
import { useRouter } from "next/navigation";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pageRoute = (path: string) => {
    router.push(path);
  };
  return (
    <html lang="en">
      <body>
        <div className="main">
          <nav className="sideBar">
            <h1>Admin Page</h1>
            <ul className="list">
              <li>
                <button className="menuBtn" onClick={() => pageRoute("/")}>
                  <Image src={home} alt="home" />
                  <p>Home</p>
                </button>
              </li>
              <li>
                <button
                  className="menuBtn"
                  onClick={() => pageRoute("/editor")}
                >
                  <Image src={dashboard} alt="dashboard" />
                  <p>editor</p>
                </button>
              </li>
              <li>
                <button className="menuBtn" onClick={() => pageRoute("/chart")}>
                  <Image src={chart} alt="chart" />
                  <p>Chart</p>
                </button>
              </li>
              <li>
                <button className="menuBtn" onClick={() => pageRoute("/coin")}>
                  <Image src={kanban} alt="Coin" />
                  <p>BitCoin</p>
                </button>
              </li>
              <li>
                <button
                  className="menuBtn"
                  onClick={() => pageRoute("/apolloclient")}
                >
                  <Image src={Settings} alt="Settings" />
                  <p>apolloclient</p>
                </button>
              </li>
            </ul>
          </nav>
          <div className="child">{children}</div>
        </div>
      </body>
    </html>
  );
}
