import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-gradient-to-br from-white via-green-100 to-green-300 text-green-800">
        {children}
      </body>
    </html>
  );
}
