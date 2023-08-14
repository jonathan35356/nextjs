import Navigation from "@/components/Navigation";
import "./globals.css";

export default function Layout({ children, title = "", description = "" }) {
  return (
    <html lang="en">
      <head>
        <title>{`Next - ${title}`}</title>
        <meta name="description" content={description} />
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
