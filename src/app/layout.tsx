import "./globals.css";
import ErrorPage from "./global-error";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="child">{children}</div>
      </body>
    </html>
  );
}
