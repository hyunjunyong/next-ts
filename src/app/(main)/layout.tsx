// import "../global.css";
import Image from "next/image";
import home from "../img/home.png";
import dashboard from "../img/dashboard.png";
import chart from "../img/bar-chart.png";
import kanban from "../img/kanban.png";
import Settings from "../img/setting.png";
import Link from "next/link";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <nav className="sideBar">
            <h1>
              <Link href="/">Admin Page</Link>
            </h1>
            <ul className="list">
              <li>
                <Link href="/main" className="menuBtn">
                  <Image src={home} alt="home" />
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/editor" className="menuBtn">
                  <Image src={dashboard} alt="dashboard" />
                  <p>editor</p>
                </Link>
              </li>
              <li>
                <Link href="/chart" className="menuBtn">
                  <Image src={chart} alt="chart" />
                  <p>Chart</p>
                </Link>
              </li>
              <li>
                <Link href="/coin" className="menuBtn">
                  <Image src={kanban} alt="Coin" />
                  <p>BitCoin</p>
                </Link>
              </li>
              <li>
                <Link href="/product" className="menuBtn">
                  <Image src={Settings} alt="Settings" />
                  <p>product</p>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="child">{children}</div>
        </div>
      </body>
    </html>
  );
}
