import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '人生履历：所有馈赠都有标价',
  description: '一个互动故事游戏，每个选择都将改写你的人生轨迹',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
