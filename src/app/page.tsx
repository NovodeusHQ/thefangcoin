import Image from "next/image";
import styles from "./page.module.css";

import TopBanner from "@/components/landing/TopBanner";
import Collaborators from "@/components/landing/Collaborators";
import WhyHaveAPiece from "@/components/landing/WhyHaveAPiece";
import LuckyFang from "@/components/landing/LuckyFang";
import SeriousStuff from "@/components/landing/SeriousStuff";
import Tokenomics from "@/components/landing/Tokenomics";
import CTA from "@/components/landing/CTA";

export default function Home() {
  return (
    <>
      <TopBanner />
      <Collaborators />
      <WhyHaveAPiece />
      <LuckyFang />
      <SeriousStuff />
      <Tokenomics />
      <CTA />
    </>
  );
}
