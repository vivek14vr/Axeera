import type { ReactNode } from "react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { MarketingMain } from "@/components/layout/marketing-main";
import { SiteBackground } from "@/components/layout/site-background";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <>
      <SiteBackground />
      <Header />
      <MarketingMain>{children}</MarketingMain>
      <Footer />
    </>
  );
}
