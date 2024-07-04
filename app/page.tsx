import Navbar from "@/components/common/Navbar";
import { MainWrapper } from "@/components/common/Wrapper";
import Header from "@/components/Home/Header";
import HowWeStand from "@/components/Home/HowWeStand";
import SolutionSection from "@/components/Home/BestSolutions";
import Expertise from "@/components/Home/Expertise";
import LetsTalk from "@/components/common/Let'sTalk";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <MainWrapper>
        <Header />
        <HowWeStand />
        <SolutionSection />
        <Expertise />
        <LetsTalk />
      </MainWrapper>
      <Footer />
    </main>
  );
}
