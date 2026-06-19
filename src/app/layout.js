import "./globals.css";

export const metadata = {
  title: "Abubakr Jallow | Finance & Data Science Portfolio",
  description:
    "Portfolio for Abubakr Jallow, a Finance and Data Science student building practical systems for risk, operations, and financial decision-making.",
  openGraph: {
    title: "Abubakr Jallow | Finance & Data Science Portfolio",
    description:
      "Projects, experience, writing, and leadership at the intersection of finance, data science, risk, and operations.",
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
