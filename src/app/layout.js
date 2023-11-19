import "@app/globals.css";

export const metadata = {
  title: "Nyatech.",
  description: "Everything is Fine.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
