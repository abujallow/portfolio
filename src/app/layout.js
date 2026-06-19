import "./globals.css";

export const metadata = {
  title: "Abubakr Jallow | Finance & Data Science Portfolio",
  description:
    "Portfolio for Abubakr Jallow, a Finance and Data Science student building practical systems across analytics, risk, operations, technology, and financial decision-making.",
  openGraph: {
    title: "Abubakr Jallow | Finance & Data Science Portfolio",
    description:
      "Projects, experience, and leadership at the intersection of finance, data science, risk, operations, and technology.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
