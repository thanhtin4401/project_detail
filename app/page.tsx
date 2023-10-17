import ProductDetail from "@/components/ProductDetail";
import SharFiles from "@/components/SharFiles";
import TeamChats from "@/components/TeamChats";
import Section from "@/components/Section";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between pt-[88px] bg-[#F7F8F9] ">
      <div className="container mx-auto py-5 px-[1.5rem] lg:px-0">
        <Section />
        <ProductDetail />
        <TeamChats />
        <SharFiles />
      </div>
      <Footer />
    </main>
  );
}
