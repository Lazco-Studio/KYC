export const metadata = { title: 'Lazco KYC', description: 'KYC verification' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body style={{ maxWidth: 780, margin: '40px auto', padding: '0 16px', fontFamily: 'ui-sans-serif' }}>
        {children}
      </body>
    </html>
  );
}