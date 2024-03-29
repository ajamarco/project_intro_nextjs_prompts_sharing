// This file is the layout component used in Next.js.
// It provides a common structure and styling for all pages in the application.
import "@styles/globals.css"; // Global styles

//===========
// Components
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Promptland",
  description: "Share AI prompts with the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"> </div>
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
