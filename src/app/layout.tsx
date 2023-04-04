import "./globals.css";
import Image from "next/image";
import home from "./img/home.png";
import dashboard from "./img/dashboard.png";
import chart from "./img/bar-chart.png";
import kanban from "./img/kanban.png";
import Settings from "./img/setting.png";
export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <nav className="sideBar">
            <h1>Admin Page</h1>
            <ul className="list">
              <li>
                <button>
                  <Image src={home} alt="home" />
                  <p>Home</p>
                </button>
              </li>
              <li>
                <button>
                  <Image src={dashboard} alt="dashboard" />
                  <p>DashBoard</p>
                </button>
              </li>
              <li>
                <button>
                  <Image src={chart} alt="chart" />
                  <p>Chart</p>
                </button>
              </li>
              <li>
                <button>
                  <Image src={kanban} alt="kanban" />
                  <p>KanBan Board</p>
                </button>
              </li>
              <li>
                <button>
                  <Image src={Settings} alt="Settings" />
                  <p>Settings</p>
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
