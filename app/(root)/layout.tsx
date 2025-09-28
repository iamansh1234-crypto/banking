export const dynamic = 'force-dynamic'


import "../globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <main>
    Sidebar
        {children}
   </main>
  );
}
