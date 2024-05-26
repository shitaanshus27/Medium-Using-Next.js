export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="border-b text-center p-2">
        Get 20% Extra Off By Signin Today
      </div>
      {children}
    </div>
  );
}
