import ProductDetail from "@/components/ProductDetail";
import SharFiles from "@/components/SharFiles";
import TeamChats from "@/components/TeamChats";
import Image from "next/image";
import Section from "@/components/Section";

export default function Home() {
  return (
    <main className="bg-[#F7F8F9] ">
      <div className="w-[90%] mx-auto container p-[50px]">
        <Section />
        <ProductDetail />
        <TeamChats />
        <SharFiles />
      </div>
    </main>
  );
}
