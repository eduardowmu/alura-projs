export const metadata = {
  title: "Code Connect",
  description: "A social media for devs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
