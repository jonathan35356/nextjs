import Navigation from "@/components/Navigation";
import "./globals.css";

export default function Layout({ children, title = "", description = "" }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/5/flatly/bootstrap.min.css"
        />
      </head>
      <body>
        <Navigation />
        <div className="container p-4">{children}</div>
      </body>
    </html>
  );
}
