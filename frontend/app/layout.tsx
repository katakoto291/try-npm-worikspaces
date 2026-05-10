import type { ReactNode } from "react";

export const metadata = {
  title: "try-npm-workspaces frontend"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
