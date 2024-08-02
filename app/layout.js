import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, users, products }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {children}
        <div className="flex p-5 gap-10 h-screen max-sm:flex-col">
          {users}
          {products}
        </div>
      </body>
    </html>
  );
}