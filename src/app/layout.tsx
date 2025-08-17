import "@/app/globals.css";

export const metadata = { title: 'Lazco KYC', description: 'KYC verification' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant" className="h-[100dvh] w-[100dvw] overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
      <body className="overflow-y-scroll h-[100dvh]">
        {children}
      </body>
    </html>
  );
}