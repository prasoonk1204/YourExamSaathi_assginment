import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import Section1 from "./components/layout/Section1";
import Section2 from "./components/layout/Section2";
import Section3 from "./components/layout/Section3";
import Section4 from "./components/layout/Section4";
import Section5 from "./components/layout/Section5";
import Section6 from "./components/layout/Section6";
import Section7 from "./components/layout/Section7";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-zinc-50 transition-colors flex justify-center items-start relative">
      <Header />
      <main className="flex max-w-[1600px] w-full justify-center items-center flex-col pt-24 px-6">
        <Hero />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Footer />
      </main>
      
    </div>
  );
}
