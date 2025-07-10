import Nav from '@/components/Nav';
import { CraftClientProvider, CraftNotImplemented } from '@query-api/next/server'
import { craftConfig } from '@/libs/query-api';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CraftClientProvider config={craftConfig}>
      <html lang="en">
        <body>
          <Nav/>
          {children}
        </body>
      </html>
    </CraftClientProvider>
  );
}
