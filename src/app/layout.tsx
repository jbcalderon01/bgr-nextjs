import StyledComponentsRegistry from "./lib/registry";
import { AuthLayout, Theme } from "@/shared/ui";
import { Inter } from "next/font/google";
import "../shared/ui/styles/GlobalStyles.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BGR - Next JS",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <StyledComponentsRegistry>
            <AuthLayout>{children}</AuthLayout>
          </StyledComponentsRegistry>
        </Theme>
      </body>
    </html>
  );
}
